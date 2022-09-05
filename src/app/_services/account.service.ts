import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject } from 'rxjs';
import { TokenDTO } from '../_models/TokenDTO';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiUrl = 'https://localhost:7006/api/';
  private currentUserSource = new ReplaySubject<TokenDTO>(1);
  currentUser$ = this.currentUserSource.asObservable();
  loggedIn: boolean = false;
  user: TokenDTO;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<TokenDTO>(this.apiUrl + 'Account/login', model).pipe(
      map((response: TokenDTO) => {
        const token = response;
        if (token) localStorage.setItem('token', JSON.stringify(token));
        this.loggedIn = true;
        this.user = response;
        this.currentUserSource.next(token);
      })
    );
  }

  register(model: any) {
    return this.http.post(this.apiUrl + 'Account/register', model);
  }

  setCurrentUser(user: TokenDTO) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
  }

  changePassword(model: any) {
    return this.http.patch(this.apiUrl + 'Account/changePassword', model);
  }
}
