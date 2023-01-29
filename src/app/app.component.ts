import { Component } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logoPath = "assets/logo/logo.png"
  title = 'SahenUI';

  constructor(_restaurantService: RestaurantService) {
    this.logoPath = _restaurantService.GetRestaurantLogo();
    this.title = _restaurantService.GetRestaurantName();
  }
}
