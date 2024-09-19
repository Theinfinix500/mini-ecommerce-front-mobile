import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '@core/models';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productService: ProductService = inject(ProductService);
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productService.loadProducts();
  }
}
