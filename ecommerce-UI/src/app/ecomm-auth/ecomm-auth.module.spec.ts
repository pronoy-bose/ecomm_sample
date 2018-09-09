import { EcommAuthModule } from './ecomm-auth.module';

describe('EcommAuthModule', () => {
  let ecommAuthModule: EcommAuthModule;

  beforeEach(() => {
    ecommAuthModule = new EcommAuthModule();
  });

  it('should create an instance', () => {
    expect(ecommAuthModule).toBeTruthy();
  });
});
