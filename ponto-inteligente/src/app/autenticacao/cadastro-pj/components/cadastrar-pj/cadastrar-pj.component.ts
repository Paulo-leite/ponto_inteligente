import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPj } from '../../models/cadastro-pj.model';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
import { CnpjValidator } from 'src/app/shared/validators/cnpj.validator';
import { CadastroPjService } from '../../services/cadastro-pj.service';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastroPjService: CadastroPjService
  ) { }

  formulario: FormGroup

  ngOnInit(): void {
    this.gerarFormulario()
  }

  gerarFormulario(){
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    })
  }

  cadastrarPj(){
    if (this.formulario.invalid){
      return
    }
    const cadPJ: CadastroPj = this.formulario.value
    this.cadastroPjService.cadastrar(cadPJ).subscribe(
      sucesso => {
        console.log(JSON.stringify(sucesso));
        this.snackBar.open('Cadastro realizado com sucesso!', 'SUCESSO!', { duration: 3000 });
        this.router.navigate(['/login'])
      },
      erro => {
        console.log(JSON.stringify(erro));
        let msg: string = 'Tente novamente mais tarde'
        if (erro.status == 400){
          msg = erro.error.errors.join(' ');
        }
        this.snackBar.open(msg, 'ERRO!', { duration: 3000 });
      }
    );
    return false;
  }

}
