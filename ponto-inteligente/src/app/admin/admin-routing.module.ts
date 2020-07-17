import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { AdminGuard } from './services/admin-guard.service';

export const ROTAS_ADMIN: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [ AdminGuard ], children: [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'atualizacao/:lancamentoId', component: AtualizacaoComponent }
  ] }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROTAS_ADMIN)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
