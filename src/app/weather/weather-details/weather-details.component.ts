import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  public daysForecast = [
    {
      day: 'FRI',
      state: 'Clouds',
      temperature: 8
    },
    {
      day: 'SAT',
      state: 'Rain',
      temperature: 10
    },
    {
      day: 'SUN',
      state: 'Clouds',
      temperature: 12
    },
    {
      day: 'MON',
      state: 'Clouds',
      temperature: 9
    },
    {
      day: 'TUE',
      state: 'Sunny',
      temperature: 8
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
