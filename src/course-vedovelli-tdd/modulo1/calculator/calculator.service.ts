import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  sum(number1, number2) {
    const num1 = parseInt(number1, 10);
    const num2 = parseInt(number2, 10);

    if (isNaN(num1) || isNaN(num2)) throw new Error('Please check your input');

    return num1 + num2;
  }
}
