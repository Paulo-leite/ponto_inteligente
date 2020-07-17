import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { CadastroPjRoutingModule } from './cadastro-pj-routing.module';
import { CadastroPjComponent } from './components/cadastrar-pj/cadastro-pj.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    CadastroPjRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class CadastroPjModule { }
