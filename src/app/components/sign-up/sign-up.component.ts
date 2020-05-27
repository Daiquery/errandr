import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private route: Router,
    ) {

   }

  ngOnInit() {
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = signupForm['signup-email'].value;
      const password = signupForm['signup-password'].value;

      this.auth.auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return this.db.collection('users').doc(cred.user.uid).set({
          age: signupForm['signup-age'].value
        }).catch( e => {console.log("Email address already in use.")})
      })

      this.auth.auth.onAuthStateChanged(user => {
        if (user){
          this.route.navigateByUrl('/home')
        }
      })

      console.log(email, password)
    })
  }

}
