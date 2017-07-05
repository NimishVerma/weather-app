import { element } from 'protractor';
import {Injectable} from '@angular/core';
import { WEATHER_ITEMS} from './weather.data';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {WeatherItem} from './weather-item'


@Injectable()
export class WeatherService{
	private cityList
	constructor(private _http: Http){}
	getWeatherItems(){
		return WEATHER_ITEMS;
	}
	getCities(weatherItem: WeatherItem){
	 const cities=this.getWeatherItems().map(function(element : WeatherItem){
      return element.cityName;
    });
	const loc = weatherItem.cityName;
	if(cities.indexOf(loc)==-1){
		
		console.log('working');
		return true;
	}
	console.log(cities)
	}
	addWeatherItem(weatherItem: WeatherItem){
			if (this.getCities(weatherItem)){
				WEATHER_ITEMS.push(weatherItem);
			}
	}

	clearWeatherItems(){
		WEATHER_ITEMS.splice(0);
	}
	searchWeatherData(cityName: string):Observable<any>{
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=6f6db65490795a18842f39ae5e38faec&units=metric')
		.map(response => response.json())
		.catch( error =>{
			console.error(error);
			return Observable.throw(error.json())
		})
}

}