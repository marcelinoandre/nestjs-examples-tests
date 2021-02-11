import { Injectable } from '@nestjs/common';
import { find, remove } from 'lodash';
import * as Money from 'dinero.js';

// Dinero.defaultCurrency = 'BRL';
// Dinero.defaultPrecision = 2;
@Injectable()
export class ShoppingCartService {
  items = [];
  money = Money;
  constructor() {
    this.money.defaultCurrency = 'BRL';
    this.money.defaultPrecision = 2;
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      const amount = this.money({ amount: item.quantity * item.product.price });
      let discount = this.money({ amount: 0 });

      if (
        item.condition &&
        item.condition.percentage &&
        item.quantity > item.condition.minimum
      ) {
        discount = amount.percentage(item.condition.percentage);
      }

      return acc.add(amount).subtract(discount);
    }, this.money({ amount: 0 }));
  }

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  summary() {
    const total = this.getTotal().getAmount();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.summary();

    this.items = [];

    return {
      total,
      items,
    };
  }
}
