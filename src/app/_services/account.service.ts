import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject } from 'rxjs';
import { TokenDTO } from '../_models/TokenDTO';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiUrl = 'https://localhost:7006/api/';
  currentUser: TokenDTO;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<TokenDTO>(this.apiUrl + 'Account/login', model).pipe(
      map((response: TokenDTO) => {
        const token = response;
        if (token) localStorage.setItem('token', JSON.stringify(token));
        this.currentUser = token;
      })
    );
  }

  register(model: any) {
    return this.http.post(this.apiUrl + 'Account/register', model);
  }

  setCurrentUser(user: TokenDTO) {
    this.currentUser = user;
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  changePassword(model: any) {
    return this.http.patch(this.apiUrl + 'Account/changePassword', model);
  }
}
