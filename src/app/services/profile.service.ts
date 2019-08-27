import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile : Profile;
  constructor(public afs: AngularFirestore) { }

  getProfile(){
    this.afs.collection("users").doc("eXECwoBd6bvAd5YjPtK2").valueChanges().subscribe(snapshot => {
      // var name = snapshot.payload.doc.data()["name"];
      console.log(snapshot["name"]);
    })
  }
}
