import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey: string = 'c';
  url:string;

  constructor(public http: HttpClient) {
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    return this.http.get(this.url + '/' + state + '/' + city + '.json');
        // .map(response => response.json());
  }
}
