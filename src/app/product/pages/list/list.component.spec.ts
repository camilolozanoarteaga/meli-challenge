import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductCardComponent } from 'src/app/shared/component/product-card/product-card.component';
import { ProductRoutes } from '../../product.routing';

import { ListComponent } from './list.component';
import { ProductService } from '@core-service/product.service';
import { findEls } from 'src/app/utils/element.spec-helper';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let route: ActivatedRoute;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, ProductCardComponent],
      imports: [
        RouterTestingModule.withRoutes(ProductRoutes),
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    route = TestBed.inject(ActivatedRoute);
    productService = TestBed.inject(ProductService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', () => {
    const getProduct = spyOn(productService, 'getProductsList').and.callThrough();

    component.searchList('ID');

    expect(getProduct).toHaveBeenCalled();
  });

  it('should sort product list', () => {
    const data = {
      author: {
        name: 'Camilo',
        lastname: 'Lozano'
      },
      categories: [],
      items: [
        {
          id: 'abc1',
          title: 'Title 1',
          price: {
            currency: '',
            amount: 1,
            decimals: 1,
          },
          picture: '',
          condition: '',
          freeShipping: true,
          address: ''
        },
        {
          id: 'abc2',
          title: 'Title 2',
          price: {
            currency: '',
            amount: 2,
            decimals: 2,
          },
          picture: '',
          condition: '',
          freeShipping: false,
          address: ''
        }
      ],
    };

    const returnData = [{
      id: 'abc1',
      description: 'Title 1',
      city: '',
      isShipping: true,
      price: 1
    }, {
      id: 'abc2',
      description: 'Title 2',
      city: '',
      isShipping: false,
      price: 2
    }];

    const sortList = component.sortProductList(data);

    expect(sortList).toEqual(returnData);
  });

  it('should render router-outlet', () => {

    component.products = [{
      id: 'abc1',
      description: 'Title 1',
      city: '',
      isShipping: true,
      price: 1
    }];
    const productCard = findEls(fixture, 'app-product-card');
    expect(productCard).toBeDefined();
  });

});
