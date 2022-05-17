import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@core-service/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DetailComponent } from './detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductRoutes } from '../../product.routing';
import { BuyDetailComponent } from 'src/app/shared/component/buy-detail/buy-detail.component';
import { ProductDescriptionComponent } from 'src/app/shared/component/product-description/product-description.component';
import { ProductDetailModel } from '@core-model/product-detail.model';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let route: ActivatedRoute;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent, BuyDetailComponent, ProductDescriptionComponent],
      imports: [
        RouterTestingModule.withRoutes(ProductRoutes),
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;

    route = TestBed.inject(ActivatedRoute);
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get detail data', () => {
    const getProduct = spyOn(productService, 'getProduct').and.callThrough();

    component.getDetailData('123');

    expect(getProduct).toHaveBeenCalled();
  });

  it('should sort product detail data', () => {
    const data = {
      author: {
        name: 'Camilo',
        lastname: 'Lozano'
      },
      item: {
        id: 'abc1',
        title: 'Title 1',
        price: {
          currency: '',
          amount: 1,
          decimals: 1,
        },
        picture: '',
        condition: 'new',
        freeShipping: true,
        soldQuantity: 12,
        description: 'Text description'
      }
    };

    const returnData: ProductDetailModel = component.getProductDetail(data);

    expect(returnData.description).toEqual('Title 1');
    expect(returnData.isNew).toBeTruthy();
    expect(returnData.price).toEqual(1);
    expect(returnData.totalSales).toEqual(12);

  });
});
