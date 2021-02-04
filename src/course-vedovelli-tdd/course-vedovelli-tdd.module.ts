import { Module } from '@nestjs/common';
import { CalculatorService } from './modulo1/calculator/calculator.service';

@Module({
  providers: [CalculatorService]
})
export class CourseVedovelliTddModule {}
