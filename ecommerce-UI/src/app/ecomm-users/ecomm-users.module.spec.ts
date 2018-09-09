import { EcommUsersModule } from './ecomm-users.module';

describe('EcommUsersModule', () => {
  let ecommUsersModule: EcommUsersModule;

  beforeEach(() => {
    ecommUsersModule = new EcommUsersModule();
  });

  it('should create an instance', () => {
    expect(ecommUsersModule).toBeTruthy();
  });
});
