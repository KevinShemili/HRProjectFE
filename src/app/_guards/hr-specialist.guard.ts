import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HrSpecialistGuard implements CanActivate {
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
        if (roles.includes('HR Specialist') == true) return true;
        this.toastr.error('HR Specialist area!');
      })
    );
  }
}
