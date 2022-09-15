import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenDecodeService {
  private jwtHelper = new JwtHelperService();
  token: any;

  constructor() {
    this.decodeToken();
  }

  private decodeToken() {
    this.token = this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }
}
