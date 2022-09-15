import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { TokenDecodeService } from '../_services/token-decode.service';

@Injectable({
  providedIn: 'root',
})
export class HrSpecialistGuard implements CanActivate {
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
        if (roles.includes('HR Specialist') == true) return true;
        this.toastr.error('HR Specialist area!');
      })
    );
  }
}
