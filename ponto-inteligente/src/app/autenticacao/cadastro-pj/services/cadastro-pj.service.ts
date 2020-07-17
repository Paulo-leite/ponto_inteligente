import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroPj } from '../models/cadastro-pj.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj'

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(environment.baseApiUrl + this.PATH, cadastroPj);
  }
}
