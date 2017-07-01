import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WeatherItemComponent} from "./weather-item.component"
import {WeatherListComponent} from "./weather-list.component"


@NgModule({
  declarations: [
    WeatherItemComponent,
    WeatherListComponent,
  ],
  imports: [],
  providers: [],
  bootstrap: [WeatherListComponent]
})
export class WeatherListModule { }
