import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ProductCardModel } from '@core-model/product-card.model';
import { ProductListModel } from '@core-model/product-list.model';
import { ProductService } from '@core-service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  products: ProductCardModel[];
  textSearch: string;
  queryParamsSub$: Subscription;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private productService: ProductService,

  ) {
    this.titleService.setTitle('Lista de productos');
  }

  ngOnInit(): void {
    this.queryParamsSub$ = this.route.queryParams.subscribe(params => {
      if (params['query']) {
        this.searchList(params['query']);
      }
    });
  }

  searchList(query: string): void {
    this.productService.getProductsList(query).subscribe((data: ProductListModel) => {
      const productos = data.items.map((item) => {
        return {
          id: item.id,
          description: item.title,
          city: item.address,
          isShipping: item.freeShipping,
          price: item.price.amount
        }
      });

      this.products = productos;
    })
  }

  ngOnDestroy(): void {
    if (this.queryParamsSub$) {
      this.queryParamsSub$.unsubscribe()
    }
  }
}
