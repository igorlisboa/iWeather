import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey: string = '99dfe35fcb7de1ee';
  url:string;

  constructor(public http: HttpClient) {
    console.log('hello world!');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    console.log(this.url);
    console.log(this.url + '/' + state + '/' + city + '.json');
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
        .map(response => {
          return response
        });
  }
}
