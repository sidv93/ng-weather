import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public signup() {
    console.log(this.myForm.value);
  }
}
