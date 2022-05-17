import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { environment } from 'src/environments/environment';
import { OrganizeProduct } from '@core-model/organize-product';

describe('ProductService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
  });

  it('should get getProductsList', inject([ProductService, HttpTestingController], (service: ProductService, controller: HttpTestingController) => {
    const organizeProduct = new OrganizeProduct(null, null, {
      results: [{
        id: '123',
        title: '',
        currency_id: '',
        price: '',
        condition: '',
        shipping: {
          free_shipping: true
        },
        address: {
          state_name: ''
        }
      }]
    });
    const payload = organizeProduct.organizeList();

    service.getProductsList('iphone').subscribe((res) => {
      expect(res).toEqual(payload);
    });

    const request = controller.expectOne(`https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4`);
    request.flush(payload);
  }));

  it('should get getProductById', inject([ProductService, HttpTestingController], (service: ProductService, controller: HttpTestingController) => {
    service.getProductById('MLA931171108').subscribe((res) => {
      expect(res).toEqual({});
    });

    const request = controller.expectOne(`${environment.api}/items/MLA931171108`);
    request.flush({});
  }));

  it('should get getProductDescriptionById', inject([ProductService, HttpTestingController], (service: ProductService, controller: HttpTestingController) => {
    service.getProductDescriptionById('MLA931171108').subscribe((res) => {
      expect(res).toEqual({});
    });

    const request = controller.expectOne(`${environment.api}/items/MLA931171108/description`);
    request.flush({});
  }));
});
