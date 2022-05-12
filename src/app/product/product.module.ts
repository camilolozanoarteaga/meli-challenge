import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutes } from './product.routing';

import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule
  ]
})
export class ProductModule { }
