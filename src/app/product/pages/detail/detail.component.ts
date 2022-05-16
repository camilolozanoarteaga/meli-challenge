import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductDetailModel } from '@core-model/product-detail.model';
import { Product } from '@core-model/product.model';
import { ProductService } from '@core-service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  detailProduct: ProductDetailModel;
  descriptionProduct: string;
  productSub$: Subscription;

  constructor(private titleService: Title, private productService: ProductService) {
    this.titleService.setTitle('Detalle');
  }

  ngOnInit(): void {
    this.productSub$ = this.productService.getProduct('MLA1133464633').subscribe(response => {
      this.detailProduct = this.getProductDetail(response);
      this.descriptionProduct = response.item.description
    });
  }

  getProductDetail(data: Product): ProductDetailModel {
    const { soldQuantity, title, condition, price } = data.item;
    return {
      totalSales: soldQuantity,
      isNew: condition === 'new' ? 'Nuevo' : '',
      description: title,
      price: price.amount,
    };
  }

  ngOnDestroy(): void {
    if (this.productSub$) {
      this.productSub$.unsubscribe();
    }
  }

}
