import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginModule } from './autenticacao/login/login.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    LoginModule,
    CadastroPjModule,
    CadastroPfModule,
    FuncionarioModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
