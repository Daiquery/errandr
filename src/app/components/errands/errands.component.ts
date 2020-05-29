import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirestoreService, Item } from '../../services/firestore.service';


@Component({
  selector: 'app-errands',
  templateUrl: './errands.component.html',
  styleUrls: ['./errands.component.css']
})



export class ErrandsComponent implements OnInit {
  items: Item[];
  errands;
  constructor(
    private db: AngularFirestore,
    private itemService: FirestoreService
    ) { 


    
    
  }


  ngOnInit(){
     console.log('ngOnInit ran')
     this.itemService.getItems().subscribe(items => {
       console.log(items)
       this.items = items
     });
  };

// next steps: if user uid matches item uid, then display delete button and edit

}