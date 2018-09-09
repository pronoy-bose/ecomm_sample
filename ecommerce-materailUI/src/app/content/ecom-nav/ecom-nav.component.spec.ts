import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomNavComponent } from './ecom-nav.component';

describe('EcomNavComponent', () => {
  let component: EcomNavComponent;
  let fixture: ComponentFixture<EcomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
