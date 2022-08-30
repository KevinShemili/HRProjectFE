import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { NavbarHomepageService } from 'src/app/_services/navbar-homepage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public accountService: AccountService,
    private homeNaVService: NavbarHomepageService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
  }

  registerToggled() {
    this.homeNaVService.toggledRegister = true;
  }
}
