import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should sum 2 and 2 and the result must be 4', () => {
    expect(service.sum(2, 2)).toBe(4);
  });

  it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
    expect(service.sum('2', '2')).toBe(4);
  });

  it('should throw an error if what is provided to the method cannot be summed', () => {
    expect(() => {
      service.sum('', '2');
    }).toThrowError();

    expect(() => {
      service.sum([], {});
    }).toThrowError();
  });
});
