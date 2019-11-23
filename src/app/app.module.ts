import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './weather/header/header.component';
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { router } from './app.routing';
import { MainContentComponent } from './auth/main-content/main-content.component';
import { SideContentComponent } from './auth/side-content/side-content.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { AddCityComponent } from './weather/add-city/add-city.component';
import { CityCardComponent } from './weather/add-city/city-card/city-card.component';
import { AddCityCardComponent } from './weather/weather-home/add-city-card/add-city-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherHomeComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    MainContentComponent,
    SideContentComponent,
    WeatherComponent,
    WeatherCardComponent,
    WeatherDetailsComponent,
    AddCityComponent,
    CityCardComponent,
    AddCityCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    router,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
