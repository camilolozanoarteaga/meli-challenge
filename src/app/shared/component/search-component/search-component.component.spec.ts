import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { SearchComponentComponent } from './search-component.component';
import { ProductRoutes } from 'src/app/product/product.routing';

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponentComponent],
      imports: [RouterTestingModule.withRoutes(ProductRoutes)],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set query params', fakeAsync(() => {
    component.searchText = 'Iphone';

    component.onSearch();
    tick();

    expect(location.path()).toBe("/items?query=Iphone");
  }));
});
