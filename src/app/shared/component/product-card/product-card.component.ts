import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardModel } from '@core-model/product-card.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product: ProductCardModel;

  constructor(private router: Router) { }

  getDescription(): void {
    this.router.navigate(['item', this.product.id]);
  }

}
