import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordChangeDTO } from 'src/app/_models/password-change-dto';
import { AccountService } from 'src/app/_services/account.service';
import { TokenDecodeService } from 'src/app/_services/token-decode.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  model = {} as PasswordChangeDTO;

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router,
    private tokenDecode: TokenDecodeService
  ) {}

  ngOnInit(): void {}

  changePassword() {
    this.model.userId = this.tokenDecode.token.nameid;

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
