import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environments } from '../../environments/environments';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { LoginForm } from '../interfaces/login-form.interface';
import { Router } from '@angular/router';

const base_url = environments.base_url;
declare const google: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private auth2: any;

  private authUrlBase = base_url + '/auth';


  createUser(userData: RegisterForm): Observable<any>{
    return this.http.post(`${base_url}/users`, userData)
    .pipe(
      tap(this.saveTokenLocalStorage )
    );
  }


  // <===================== LOGIN USER =====================>

  loginUser(userData: LoginForm): Observable<any>{
    return this.http.post(`${this.authUrlBase}/login`, userData)
      .pipe(
        tap(this.saveTokenLocalStorage )
      );
  }

  loginUserWithGoogle(token: string):Observable<any>{
    return this.http.post(`${this.authUrlBase}/google`, {token} )
      .pipe(
        tap(this.saveTokenLocalStorage)
      )
  }

  logoutUser(){
    this.deleteTokenLocalStorage();
    this.auth2.signOut().then(function() {

    })
    google.accounts.id.revoke('adriamhassekgonza@gmail.com', ()=> {
      this.router.navigateByUrl('/login');
    })
  }

  // ===================== RECHECK TOKEN =====================
  checkAndRenewToken(): Observable<any>{

    return this.http.get(`${this.authUrlBase}/renew`, {
      headers: {
        'x-token': localStorage.getItem('token') || ''
      }
    }).pipe(
      tap(this.saveTokenLocalStorage),
      map(_ => true ),
      catchError( err => of(false))


    )
  }


  // ===================== OTHER FUNCTIONS =====================
  private saveTokenLocalStorage = (resp: any): void => localStorage.setItem('token', resp.token)
  private deleteTokenLocalStorage = (): void => localStorage.removeItem('token');
}
