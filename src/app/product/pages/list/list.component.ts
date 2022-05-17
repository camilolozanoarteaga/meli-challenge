import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductCardModel } from '@core-model/product-card.model';
import { ProductListModel } from '@core-model/product-list.model';
import { ProductService } from '@core-service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  products: ProductCardModel[];
  textSearch: string;
  queryParamsSub$: Subscription;
  productsSub$: Subscription;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.titleService.setTitle('Lista de productos');
  }

  ngOnInit(): void {
    this.queryParamsSub$ = this.route.queryParams.subscribe((params: Params) => {
      if (params['query']) {
        this.searchList(params['query']);
      }
    });
  }

  searchList(query: string): void {
    this.productsSub$ = this.productService.getProductsList(query).subscribe((data: ProductListModel) => {
      this.products = this.sortProductList(data);
    })
  }

  sortProductList(data: ProductListModel): ProductCardModel[] {
    return data.items.map((item) => {
      return {
        id: item.id,
        description: item.title,
        city: item.address,
        isShipping: item.freeShipping,
        price: item.price.amount
      }
    });
  }


  ngOnDestroy(): void {
    if (this.queryParamsSub$) {
      this.queryParamsSub$.unsubscribe();
    }
    if (this.productsSub$) {
      this.productsSub$.unsubscribe();
    }
  }
}
