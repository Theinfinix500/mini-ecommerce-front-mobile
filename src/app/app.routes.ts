import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/products/product-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductPageComponent,
  },
];
