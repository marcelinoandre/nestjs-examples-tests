import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  const product = {
    title: 'Adidas running shows - men',
    price: 35388, //353.88 | R$ 353,83
  };

  const product2 = {
    title: 'Mizuno running shows - women',
    price: 41872,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCartService],
    }).compile();

    service = module.get<ShoppingCartService>(ShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(service.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product,
      quantity: 2, // 70776
    };
    service.add(item);

    expect(service.getTotal()).toEqual(70776);
  });

  it('should ensure no more than on product exists at a time', () => {
    service.add({
      product,
      quantity: 2,
    });

    service.add({
      product,
      quantity: 1,
    });

    expect(service.getTotal()).toBe(35388);
  });

  it('should update total when a product gets included and then removed', () => {
    service.add({
      product,
      quantity: 2,
    });

    service.add({
      product: product2,
      quantity: 1,
    });

    service.remove(product);

    expect(service.getTotal()).toEqual(41872);
  });
});
