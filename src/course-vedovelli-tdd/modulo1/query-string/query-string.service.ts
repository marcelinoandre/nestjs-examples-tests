import { Injectable } from '@nestjs/common';

@Injectable()
export class QueryStringService {
  queryString(obj) {
    return Object.entries(obj).map(this.keyValueToString).join('&');
  }

  private keyValueToString([key, value]) {
    if (typeof value === 'object' && !Array.isArray(value))
      throw new Error('Please check your params');
    return `${key}=${value}`;
  }
}
