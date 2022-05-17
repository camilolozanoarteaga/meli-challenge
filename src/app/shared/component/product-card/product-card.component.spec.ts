import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ProductRoutes } from 'src/app/product/product.routing';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [RouterTestingModule.withRoutes(ProductRoutes)],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    component.product = {
      id: 'ABC123',
      description: 'Test description',
      price: 1231,
      city: 'Buenos Aires',
      isShipping: true,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take query param', fakeAsync(() => {
    component.getDescription();
    tick();

    expect(location.path()).toBe("/item/" + component.product.id);
  }));
});
