import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject } from 'rxjs';
import { TokenDTO } from '../_models/TokenDTO';
import { UserDTO } from '../_models/UserDTO';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiUrl = 'https://localhost:7006/api/';
  private currentUserSource = new ReplaySubject<TokenDTO>(1);
  currentUser$ = this.currentUserSource.asObservable();
  UserProfile : any;


  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<TokenDTO>(this.apiUrl + 'Account/login', model).pipe(
      map((response: TokenDTO) => {
        const token = response;
        if (token) localStorage.setItem('token', JSON.stringify(token));
        this.currentUserSource.next(token);

        console.log(JSON.parse(localStorage.getItem('token')).UserId);
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

  
  
  getUser(userId : any){
    return this.http.get('https://localhost:7006/User/' + userId);
  }
}
