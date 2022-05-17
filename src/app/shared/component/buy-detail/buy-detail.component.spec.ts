import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDetailComponent } from './buy-detail.component';

describe('BuyDetailComponent', () => {
  let component: BuyDetailComponent;
  let fixture: ComponentFixture<BuyDetailComponent>;
  let product = {
    totalSales: 1231,
    isNew: 'new',
    description: '',
    price: 13123,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyDetailComponent);
    component = fixture.componentInstance;

    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input defined', () => {
    expect(component.product).toBeDefined();
    expect(component.product).toEqual(product);
  });
});
