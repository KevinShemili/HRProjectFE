import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { TokenDecodeService } from '../_services/token-decode.service';

@Injectable({
  providedIn: 'root',
})
export class HrSpecialistGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private tokenDecode: TokenDecodeService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const decodedToken = this.tokenDecode.token;
    let roles: Array<string> = decodedToken.role;
    if (roles.includes('HR Specialist') == true) return true;
    this.toastr.error('HR Specialist area!');
    this.router.navigateByUrl('/home');
  }
}
