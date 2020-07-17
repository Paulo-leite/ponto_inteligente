import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPfRoutingModule } from './cadastro-pf-routing.module';
import { RouterModule } from '@angular/router';
import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import { CadastroPfComponent } from './components/cadastrar-pf/cadastro-pf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent
  ],
  imports: [
    CommonModule,
    CadastroPfRoutingModule,
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
export class CadastroPfModule { }
