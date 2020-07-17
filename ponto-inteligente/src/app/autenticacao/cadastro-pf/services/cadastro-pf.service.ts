import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroPf } from '../models/cadastro-pj.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroPfService {

  private readonly API: string = 'cadastrar-pf'

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.http.post(environment.baseApiUrl + this.API, cadastroPf);
  }
}
