import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { BuyDetailComponent } from './component/buy-detail/buy-detail.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    BuyDetailComponent,
    ProductDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    BuyDetailComponent,
    ProductDescriptionComponent
  ]
})
export class SharedModule { }
