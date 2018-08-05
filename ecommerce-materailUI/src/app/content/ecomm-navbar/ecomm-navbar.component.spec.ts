import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommNavbarComponent } from './ecomm-navbar.component';

describe('EcommNavbarComponent', () => {
  let component: EcommNavbarComponent;
  let fixture: ComponentFixture<EcommNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
