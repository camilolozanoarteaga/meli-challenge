import { Component, OnInit } from '@angular/core';
import { ProductCardModel } from '@core-model/product-card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: ProductCardModel[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        name: 'Iphone 11',
        description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo, Completo Unico!',
        city: 'Capital Federal',
        isShipping: true,
        price: 1.981
      }, {
        name: 'Iphone 11',
        description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo, Completo Unico!',
        city: 'Capital Federal',
        isShipping: true,
        price: 1.981
      }
    ];
  }

}
