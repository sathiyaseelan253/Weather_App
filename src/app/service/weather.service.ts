import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';

import { WeatherData } from '../model/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseURL:string=''
  constructor(private http : HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseURL+cityName, {
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue)
      .set('content-type','application/octet-stream')
    });
  }
}
