import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '@core/models/cart.model';
import { Product } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _cartStore$ = new BehaviorSubject<CartItem[]>([]);
  readonly cartItems$ = this._cartStore$.asObservable();
  readonly cartItemsCount$ = this.cartItems$.pipe(map((items) => items.length));
  readonly cartItemsTotal$ = this.cartItems$.pipe(
    map((items) =>
      items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
    )
  );

  addProductToCart(product: Product): void {
    const currentCart = this._cartStore$.getValue();
    const searchedProductIndex = currentCart.findIndex(
      (item) => item.product.id === product.id
    );
    const productIndexExistInCart = searchedProductIndex !== -1;
    // TODO TYPES: should correct type
    let updatedCartItems: any[] = [];

    if (productIndexExistInCart) {
      updatedCartItems = currentCart.map((item, index) => {
        if (searchedProductIndex === index) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    } else {
      updatedCartItems = [...currentCart, { product, quantity: 1 }];
    }

    this._cartStore$.next(updatedCartItems);
  }

  increaseQuantity(productId: number): void {
    const currentCart = this._cartStore$.getValue();
    const itemIndex = currentCart.findIndex(
      (item) => item.product.id === productId
    );

    if (itemIndex !== -1) {
      const updatedCartItems = currentCart.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      this._cartStore$.next(updatedCartItems);
    }
  }

  decreaseQuantity(productId: number): void {
    const currentCart = this._cartStore$.getValue();
    const itemIndex = currentCart.findIndex(
      (item) => item.product.id === productId
    );

    if (itemIndex !== -1) {
      const item = currentCart[itemIndex];
      if (item.quantity > 1) {
        const updatedCartItems = currentCart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
        this._cartStore$.next(updatedCartItems);
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: number): void {
    const updatedCartItems = this._cartStore$
      .getValue()
      .filter((item) => item.product.id !== productId);

    this._cartStore$.next(updatedCartItems);
  }

  clearCart(): void {
    this._cartStore$.next([]);
  }
}
