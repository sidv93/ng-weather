import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    const { email, password } = this.myForm.value;
    this.fbService.login(email, password).subscribe(
      data => {
        this.router.navigate(['/', 'weather']);
      }
    );
  }

}
