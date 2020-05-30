import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm['login-email'].value;
      const password = loginForm['login-password'].value;

     this.login(email, password); 

      

      console.log(email, password)
    })

  }

  async login(email: string, password: string) {
    var result = await this.auth.auth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['/home']);
  }

}
