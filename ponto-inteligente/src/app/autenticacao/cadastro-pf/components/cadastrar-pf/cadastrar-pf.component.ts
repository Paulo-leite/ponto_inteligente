import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
import { CnpjValidator } from 'src/app/shared/validators/cnpj.validator';
import { CadastroPf } from '../../models/cadastro-pj.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroPfService } from '../../services/cadastro-pf.service';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private cadastroPfService: CadastroPfService
  ) { }

  ngOnInit(): void {
    this.gerarFormulario();
  }

  gerarFormulario(){
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPf(){
    if (this.formulario.invalid){
      return
    }
    let cadastroPf : CadastroPf = this.formulario.value;
    this.cadastroPfService.cadastrar(cadastroPf).subscribe(
      sucesso => {
        console.log(JSON.stringify(sucesso));
        this.snackBar.open('Cadastro realizado com Sucesso', 'SUCESSO!', { duration: 3000 });
        this.router.navigate(['/login']);
      },
      erro => {
        console.log(JSON.stringify(erro));
        let msg: string = 'Tente novamente mais tarde';
        if (erro.status == 400){
          msg = erro.error.errors.join(' ');
        }
        this.snackBar.open(msg, 'ERRO!', { duration: 3000 });
      }
    );
    return false;
  }

}
