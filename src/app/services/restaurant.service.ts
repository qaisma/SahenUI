// https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  RestaurantLogoUrl: string = 'https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg';
  RestaurantName: string = 'KFC';

  GetRestaurantLogo(): string {
    return this.RestaurantLogoUrl;
  }

  GetRestaurantName(): string {
    return this.RestaurantName;
  }
}
