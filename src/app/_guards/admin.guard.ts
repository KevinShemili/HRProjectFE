import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenDecodeService } from '../_services/token-decode.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  jwtHelper = new JwtHelperService();

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private tokenDecode: TokenDecodeService
  ) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        const decodedToken = this.tokenDecode.token;
        let roles: Array<string> = decodedToken.role;
        if (roles.includes('Administrator') == true) return true;
        this.toastr.error('Admin area!');
      })
    );
  }
}
