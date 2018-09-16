import { TestBed, inject } from '@angular/core/testing';

import { ShopAreaService } from './shop-area.service';

describe('ShopAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopAreaService]
    });
  });

  it('should be created', inject([ShopAreaService], (service: ShopAreaService) => {
    expect(service).toBeTruthy();
  }));
});
