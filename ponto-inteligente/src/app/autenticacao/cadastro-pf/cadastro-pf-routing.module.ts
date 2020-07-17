import { CadastroPfComponent } from './components/cadastrar-pf/cadastro-pf.component';
import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const cadastroPfRoutes: Routes = [
  { path: 'cadastro-pf', component: CadastroPfComponent, children: [
    { path: '', component: CadastrarPfComponent }
  ] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cadastroPfRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPfRoutingModule { }
