import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordChangeDTO } from 'src/app/_models/password-change-dto';
import { AccountService } from 'src/app/_services/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  model = {} as PasswordChangeDTO;
  jwtHelper = new JwtHelperService();

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changePassword() {
    const decodedToken = this.jwtHelper.decodeToken(
      localStorage.getItem('token')
    );
    this.model.userId = decodedToken.nameid[0]; // refers to array index 0 where guid is stored

    this.accountService.changePassword(this.model).subscribe({
      next: () => {
        this.toastr.success('Successfully changed password!');
        this.router.navigateByUrl('/home');
      },
      error: (e) => {
        console.error(e);
        this.toastr.error(e.error);
      },
      complete: () => {
        console.log();
      },
    });
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }
}
