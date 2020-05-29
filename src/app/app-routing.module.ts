import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ErrandsComponent } from './components/errands/errands.component';
import { ErrandCreateComponent } from './components/errand-create/errand-create.component';
import { LoginComponent } from './components/login/login.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'errands', component: ErrandsComponent },
  { path: 'errand-create', component: ErrandCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
