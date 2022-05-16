import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProductDetailModel } from '@core-model/product-detail.model';

@Component({
  selector: 'app-buy-detail',
  templateUrl: './buy-detail.component.html',
  styleUrls: ['./buy-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyDetailComponent implements OnInit {

  @Input() product: ProductDetailModel;

  constructor() { }

  ngOnInit(): void { }

}
