import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WeatherItemComponent} from "./weather/weather-item.component";
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {WeatherService} from './weather/weather-service';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [WeatherService,HttpModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
