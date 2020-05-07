import { PasswordResetComponent } from './login/password-reset/password-reset.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: '', redirectTo: 'section-one', pathMatch: 'full' },
  { path: '**', redirectTo: 'section-one', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
