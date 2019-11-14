import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { router } from './app.routing';
import { MainContentComponent } from './auth/main-content/main-content.component';
import { SideContentComponent } from './auth/side-content/side-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    MainContentComponent,
    SideContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    router,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
