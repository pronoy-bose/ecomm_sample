import { ShopAreaModule } from './shop-area.module';

describe('ShopAreaModule', () => {
  let shopAreaModule: ShopAreaModule;

  beforeEach(() => {
    shopAreaModule = new ShopAreaModule();
  });

  it('should create an instance', () => {
    expect(shopAreaModule).toBeTruthy();
  });
});
