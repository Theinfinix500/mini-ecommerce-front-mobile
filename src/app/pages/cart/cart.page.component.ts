import { Component, inject } from '@angular/core';
import { NavbarComponent } from '@core/layout/navbar/navbar.component';
import { CartService } from './services/cart.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, CartItemComponent],
  templateUrl: './cart.page.component.html',
  styleUrl: './cart.page.component.scss',
})
export class CartPageComponent {
  private readonly cartService: CartService = inject(CartService);

  readonly cartItems$ = this.cartService.cartItems$;
  readonly cartItemsTotal$: Observable<number> =
    this.cartService.cartItemsTotal$;

  clearCart() {
    this.cartService.clearCart();
  }
}
