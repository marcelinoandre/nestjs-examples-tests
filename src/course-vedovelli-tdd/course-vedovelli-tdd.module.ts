import { Module } from '@nestjs/common';
import { CalculatorService } from './modulo1/calculator/calculator.service';
import { QueryStringService } from './modulo1/query-string/query-string.service';
import { ShoppingCartService } from './modulo1/shopping-cart/shopping-cart.service';

@Module({
  providers: [CalculatorService, QueryStringService, ShoppingCartService]
})
export class CourseVedovelliTddModule {}
