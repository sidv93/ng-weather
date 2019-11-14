import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private store: AngularFirestore) { }

  public login(username: string, password: string) {
    console.log(username, password);
    return this.store.collection('users').add({username, password});
  }

  public getUsers(): Observable<any> {
    return this.store.collection('users').snapshotChanges();
  }
}
