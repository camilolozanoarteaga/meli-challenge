import { Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './product.component';

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'items' },
      {
        path: 'items',
        component: ListComponent,
      },
      {
        path: 'item/:id',
        component: DetailComponent,
      },
    ]
  }
];
