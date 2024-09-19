import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Product } from '@core/models';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  cartService: CartService = inject(CartService);

  @Input() product!: Product;

  addProductToCart() {
    this.cartService.addProductToCart(this.product);
  }
}
