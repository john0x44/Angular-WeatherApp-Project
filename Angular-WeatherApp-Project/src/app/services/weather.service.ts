import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(): Observable<WeatherData>{
    return this.http.get<WeatherData>("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=40.730610&current_weather=true",{
      headers: new HttpHeaders(),
      params: new HttpParams()
    })
  }
  
}
