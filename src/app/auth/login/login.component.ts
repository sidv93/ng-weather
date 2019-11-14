import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private fbService: FirebaseService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    const { username, password } = this.myForm.value;
    // this.fbService.login(username, password).then(console.log);
    this.fbService.getUsers().subscribe(
      doc => {
        console.log(doc[0].payload.doc.data());
      }
    );
  }

}
