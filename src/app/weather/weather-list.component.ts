import { Component } from '@angular/core';

import { WeatherItemComponent } from './weather-item.component';
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS} from './weather.data';

@Component({
  selector: 'weather-list',
  template: `<section class="weather-list">
  <weather-item *ngFor="#weatherItem of weatherItems"></weather-item>
  </section>`,

})

export class WeatherListComponent{
  weatherItems: WeatherItem[];
  ngOnit():any{
    this.weatherItems = WEATHER_ITEMS;
  }

}
