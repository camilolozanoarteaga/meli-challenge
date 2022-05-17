import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './shared/component/search-component/search-component.component';
import { findEl } from './utils/element.spec-helper';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SearchComponentComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const routerOutlet = findEl(fixture, 'router-outlet');
    expect(routerOutlet).toBeDefined();
  });

  it('should render app-search-component', () => {
    const searchComponent = findEl(fixture, 'app-search-component');
    expect(searchComponent).toBeDefined();
  });
});
