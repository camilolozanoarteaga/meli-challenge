import { Component, Input, OnInit } from '@angular/core';
import { ProductCardModel } from '@core-model/product-card.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
