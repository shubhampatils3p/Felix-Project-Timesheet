import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase} from 'angularfire2/database';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly userspath = "Development/users/users";
  collectionRef= "Development"
  ref = "Development"
  usersRef="users"

  public usersArray = [];

  constructor(public af: AngularFireDatabase) { }

  getUser(){
    
    return  this.af.database.ref(this.ref).child(this.usersRef)    
    //return this.afs.collection(this.collectionRef).doc(this.usersRef).collection(this.usersRef).valueChanges()
    // .subscribe(res => {
    //   this.usersArray = res;
      
    // });
    
  }

  // getUser(): Observable<any[]> {
  //   this.afs.collection(this.collectionRef).doc(this.usersRef).collection(this.usersRef).snapshotChanges()
  //   .subscribe(res => {
  //      this.usersArray = res;
  //      console.log(res["branch"]);
  //   })
  //   return;
  // }
}
