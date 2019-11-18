import { AuthComponent } from "./auth/auth.component";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { AddCityComponent } from './weather/add-city/add-city.component';
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthComponent,
    },
    {
        path: 'signup',
        component: AuthComponent
    },
    {
        path: 'weather',
        component: WeatherComponent,
        children: [
            {
                path: '',
                component: WeatherHomeComponent
            },
            {
                path: 'details',
                component: WeatherDetailsComponent
            },
            {
                path: 'add',
                component: AddCityComponent
            }
        ]
    }
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);