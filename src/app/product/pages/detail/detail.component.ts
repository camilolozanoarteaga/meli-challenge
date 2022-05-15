import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductDetailModel } from '@core-model/product-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailProduct: ProductDetailModel;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Detalle');
  }

  ngOnInit(): void {
    this.detailProduct = {
      totalSales: 124,
      isNew: true,
      description: 'Deco Reverse Sombrero Oxford',
      price: 1.980,
    };
  }

}
