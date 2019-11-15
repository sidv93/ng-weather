import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public signup() {
    const { email, password } = this.myForm.value;
    this.firebaseService.signup(email, password).subscribe(console.log);
  }
}
