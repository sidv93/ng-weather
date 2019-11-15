import { AuthComponent } from "./auth/auth.component";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

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
        component: WeatherComponent
    }
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);