import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService, Item } from '../../services/firestore.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items: Item[];

  constructor(
    private auth: AngularFireAuth,
    private itemService: FirestoreService
    
    ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items)
      this.items = items
    });

  }

}
