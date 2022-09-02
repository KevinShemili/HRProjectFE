import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  regUserHide: boolean;

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
