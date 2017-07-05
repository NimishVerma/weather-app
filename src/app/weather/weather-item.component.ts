import { Component } from '@angular/core';
import {WeatherItem} from "./weather-item";
@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.css'],
  inputs:['weatherItem: item']
})
export class WeatherItemComponent{
          weatherItem: WeatherItem;
          
  }
