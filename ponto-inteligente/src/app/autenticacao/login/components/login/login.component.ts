import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private tb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm(){
    this.formulario = this.tb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  logar(){
    if(this.formulario.invalid){
      this.snackBar.open("Dados inválidos", "Erro", { duration: 3000 });
      return;
    }
    const login: Login = this.formulario.value;
    this.loginService.logar(login).subscribe(
      data => {
        console.log(JSON.stringify(data));
        localStorage['token'] = data['data']['token'];
        const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]));
        console.log(JSON.stringify(usuarioData));
        if (usuarioData['role'] == 'ROLE_ADMIN'){
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/funcionario'])
        }
      },
      err => {
        console.log(JSON.stringify(err));
        let msg: string = "Tente novamente em Instantes";
        if (err['status'] == 401){
          msg = "Email/Senha inválido(s)"
        }
        this.snackBar.open(msg, "Erro", { duration: 3000 });
      }
    )
  }

}
