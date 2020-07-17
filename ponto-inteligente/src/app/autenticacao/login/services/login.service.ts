import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    return this.http.post(environment.baseUrl + this.PATH, login);
  }

}
