import { Module } from '@nestjs/common';
import { CalculatorService } from './modulo1/calculator/calculator.service';
import { QueryStringService } from './modulo1/query-string/query-string.service';

@Module({
  providers: [CalculatorService, QueryStringService]
})
export class CourseVedovelliTddModule {}
