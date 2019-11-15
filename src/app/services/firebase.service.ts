import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private store: AngularFirestore, private fireAuth: AngularFireAuth) { }

  public login(email: string, password: string) {
    console.log(email, password);
    // return this.store.collection('users').add({username, password});
    return from(this.fireAuth.auth.signInWithEmailAndPassword(email, password));
  }

  public signup(email: string, password: string) {
    console.log(email, password);
    return from(this.fireAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  public getUsers(): Observable<any> {
    return this.store.collection('users').snapshotChanges();
  }
}
