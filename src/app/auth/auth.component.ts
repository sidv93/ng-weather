import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public login = true;
  public mainContent: any;
  public sideContent: any;
  private loginInfo = {
    mainContent: {
      title: 'Login',
      submitText: 'Login',
      referText: {
        text: `Don't have an account?`,
        link: 'SIGNUP'
      }
    },
    sideContent: {
      text: 'Welcome back!'
    }
  };

  private signupInfo = {
    mainContent: {
      title: 'Signup',
      submitText: 'Signup',
      referText: {
        text: `Already have an account?`,
        link: 'LOGIN'
      }
    },
    sideContent: {
      text: 'Join ng-weather today!'
    }
  }

  constructor(private route: Router) { }

  ngOnInit() {
    const url = this.route.url;
    if(url.includes('login')) {
      this.login = true;
      this.mainContent = {...this.loginInfo.mainContent};
      this.sideContent = {...this.loginInfo.sideContent};
    } else if(url.includes('signup')) {
      this.login = false;
      this.mainContent = {...this.signupInfo.mainContent};
      this.sideContent = {...this.signupInfo.sideContent};
    }
  }
}
