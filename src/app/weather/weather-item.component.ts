import { Component } from '@angular/core';
import {WeatherItem} from "./weather-item";
@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.css']
})
export class WeatherItemComponent{
          weatherItem: WeatherItem;
          
  }
