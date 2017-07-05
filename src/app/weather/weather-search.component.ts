import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService} from './weather-service';
import {WeatherItem} from './weather-item';
import {Subject} from 'rxjs/Subject';


@Component({
    selector:'my-weather-search',
    template:`
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm" >
            <label for="city">City</label>
            <input name="location" ngModel type="text" #location="ngModel" (input)="onSearchLocation(input.value)" #input required />
            <button type="submit" class="btn btn-success"   >Add City</button>

            </form>
            <div>
                <span class="info">City found:</span>{{data.name}}
                </div>
         </section>
    `
})
export class WeatherSearchComponent implements OnInit{
    private searchStream = new Subject<string>();
    data: any={};
    constructor (private _weatherService:WeatherService){}
onSubmit(f: FormGroup){
    console.log(f.value.location);

 this._weatherService.searchWeatherData(f.value.location)
 .subscribe(
    data => {
       const weatherItem = new WeatherItem(data.name, data.weather[0].description,data.main.temp);
      this._weatherService.addWeatherItem(weatherItem);
      

   }
 );
}
onSearchLocation(cityName: string){
 this.searchStream
 .next(cityName);  

}
ngOnInit(){
    this.searchStream
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((input:string)=> this._weatherService.searchWeatherData(input))
    .subscribe(
        data=> this.data = data
    );
}
}