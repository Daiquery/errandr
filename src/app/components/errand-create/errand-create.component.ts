import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from '../../services/firestore.service'

@Component({
  selector: 'app-errand-create',
  templateUrl: './errand-create.component.html',
  styleUrls: ['./errand-create.component.css']
})
export class ErrandCreateComponent implements OnInit {

  constructor(
    private db: AngularFirestore,
    private itemService: FirestoreService
    ) { 
  }
  uid = "a3";
  location: string;
  list: [string];


  ngOnInit() {
    // const createForm = document.querySelector('#create-form');
    // createForm.addEventListener('submit', (e) => {
    //   e.preventDefault();

    //   const email = createForm['signup-email'].value;
    //   const password = createForm['signup-password'].value;

    const createForm = document.querySelector('#create-form')
    createForm.addEventListener('submit', (e) => {
      e.preventDefault();

       var location = createForm['errand-location'].value;
       var listItem = createForm['errand-listitem'].value;
       var list = [];

       list.push(listItem);


     

      this.createErrand(location, list, this.uid);
      // this.location = location; 
      // this.list.push(listItem);
      // console.log(this.list, this.location)
     
    })

    const errandItem = document.querySelector('#erranditem-new')

    errandItem.addEventListener('click', (e) => {
      e.preventDefault();
      var newItem = document.createElement("input")
      document.getElementById("errand-list").appendChild(newItem)
      newItem.id = "errand-listitem"
      newItem.required = true;

    })
    
    
    
    
     

  }
createErrand(location: string, list: string[], uid: string){
  this.itemService.addItem(list, location, uid);
  console.log('it works idiot')
}


}


