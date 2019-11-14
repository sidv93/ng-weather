import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    console.log(this.myForm.value);
  }

}
