import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  cityName :string = 'chennai';
  weatherDataFromAPI? : WeatherData;
  constructor(private weatherService:WeatherService){}
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName =''
  }
  onFormSumit(){
    this.getWeatherData(this.cityName);
    this.cityName =''
  }
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(this.cityName).subscribe((response)=>{
      this.weatherDataFromAPI = response;
      console.log('Weather data:',this.weatherDataFromAPI);
    }, error=>{
      alert('Please enter valid city name!!');
    })
  }

}
