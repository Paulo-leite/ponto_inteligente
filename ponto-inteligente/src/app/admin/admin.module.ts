import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, ConfirmarDialog } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from '../shared/shared.module';

import { HttpUtilService } from '../shared/services/http-util.service';
import { LancamentoService } from '../shared/services/lancamento.service';

import { PtBrMatPaginatorIntl } from '../shared/pt-br-mat-paginator-intl';
import { FuncionarioService } from '../shared/services/funcionario.service';
import { AdminGuard } from './services/admin-guard.service';


@NgModule({
  declarations: [
    ListagemComponent, 
    CadastroComponent, 
    AtualizacaoComponent,
    AdminComponent,
    ConfirmarDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl },
    AdminGuard
  ],
  entryComponents: [
    ConfirmarDialog
  ]
})

export class AdminModule { }
