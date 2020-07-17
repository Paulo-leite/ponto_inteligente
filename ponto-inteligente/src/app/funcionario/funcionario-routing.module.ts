import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './components/funcionario.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { ListagemComponent } from './components/listagem/listagem.component';

export const FuncionarioRoutes: Routes = [
    { path: 'funcionario', component: FuncionarioComponent, children: [
        { path: '', component: LancamentoComponent },
        { path: 'listagem', component: ListagemComponent }
    ] }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FuncionarioRoutes)
  ],
  exports :[
      RouterModule
  ]
})
export class FuncionarioRoutingModule { }
