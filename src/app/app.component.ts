import { Component } from '@angular/core';
import{WeatherListComponent} from './weather/weather-list.component';
import{WeatherSearchComponent} from './weather/weather-search.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
