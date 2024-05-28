import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environments } from '../../environments/environments';

const base_url = environments.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(userData: RegisterForm): Observable<any>{
    return this.http.post(`${base_url}/users`, userData);
  }
}
