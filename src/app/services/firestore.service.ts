import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
itemsCollection: AngularFirestoreCollection<Item>;
items: Observable<Item[]>

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('errands').valueChanges();
   }

   getItems(){
     return this.items;
   }

   addItem(list?: string[], location?:string, uid?:string) {
      this.afs.collection('errands').add({ list: list, location: location, uid: uid });
  }
  
  
  }

  export interface Item {
    list?: string[];
    location?: string;
    uid?: string;
  }
