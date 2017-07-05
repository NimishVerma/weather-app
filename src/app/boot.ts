import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import { HttpModule } from '@angular/http';
import { WeatherService} from './weather/weather-service'
platformBrowserDynamic().bootstrapModule(AppComponent,[HttpModule, WeatherService]);
