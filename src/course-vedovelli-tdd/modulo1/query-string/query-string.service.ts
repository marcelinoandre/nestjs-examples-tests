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

  parse(string) {
    return Object.fromEntries(
      string.split('&').map((item) => {
        const parts = item.split('=');

        if (parts[1].indexOf(',') > -1) {
          parts[1] = parts[1].split(',');
        }
        return parts;
      }),
    );
  }
}
