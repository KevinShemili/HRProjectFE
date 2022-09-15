import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginDTO } from 'src/app/_models/login-dto';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  model = {} as LoginDTO;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
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
}
