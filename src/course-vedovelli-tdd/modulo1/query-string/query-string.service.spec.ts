import { Test, TestingModule } from '@nestjs/testing';
import { QueryStringService } from './query-string.service';

describe('QueryStringService', () => {
  let service: QueryStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryStringService],
    }).compile();

    service = module.get<QueryStringService>(QueryStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Object to query sstring', () => {
    it('should create a valid query string when an object is provided', () => {
      const obj = {
        name: 'Andre',
        profession: 'developer',
      };

      expect(service.queryString(obj)).toBe('name=Andre&profession=developer');
    });

    it('should create a valid query string even when an array is passed as value', () => {
      const obj = {
        name: 'Andre',
        abilities: ['JS', 'TDD'],
      };

      expect(service.queryString(obj)).toBe('name=Andre&abilities=JS,TDD');
    });

    it('should throw an error when an object is passed as value', () => {
      const obj = {
        name: 'Fabio',
        abilities: {
          first: 'JS',
          second: 'TDD',
        },
      };

      expect(() => {
        service.queryString(obj);
      }).toThrowError();
    });
  });
});
