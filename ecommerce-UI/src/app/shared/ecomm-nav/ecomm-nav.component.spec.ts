import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommNavComponent } from './ecomm-nav.component';

describe('EcommNavComponent', () => {
  let component: EcommNavComponent;
  let fixture: ComponentFixture<EcommNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
