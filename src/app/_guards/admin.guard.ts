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

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  jwtHelper = new JwtHelperService();

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        const decodedToken = this.jwtHelper.decodeToken(
          localStorage.getItem('token')
        );
        let roles: Array<string> = decodedToken.role;
        if (roles.includes('Administrator') == true) return true;
        this.toastr.error('Admin area!');
      })
    );
  }
}
