import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogarComponent } from './components/login/logar.component';

export const ROTA_LOGIN: Routes = [
  { path: 'login', component: LogarComponent, children: [{
    path: '', component: LoginComponent
  }] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROTA_LOGIN)
  ],
  exports :[
    RouterModule
  ]
})
export class LoginRoutingModule { }
