import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPjComponent } from './components/cadastrar-pj/cadastro-pj.component';
import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';

export const cadastroPjRoutes: Routes = [
  { path: 'cadastro-pj', component: CadastroPjComponent, children: [
    { path: '', component: CadastrarPjComponent }
  ] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cadastroPjRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPjRoutingModule { }
