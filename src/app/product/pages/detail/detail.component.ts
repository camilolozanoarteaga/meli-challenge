import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
  paramId: string;

  constructor(private titleService: Title, private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.titleService.setTitle('Detalle');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.getDetailData(params['id']);
      }
    });
  }

  getDetailData(idParam: string) {
    this.productSub$ = this.productService.getProduct(idParam).subscribe(response => {
      this.detailProduct = this.getProductDetail(response);
      this.descriptionProduct = response.item.description;
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
