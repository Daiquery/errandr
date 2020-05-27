import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.auth.onAuthStateChanged(user => {
      if (user){
        // load errands
      }
    })

  }

}
