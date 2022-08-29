import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout() {
    this.accountService.logout();
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: (x) => {
        this.loggedIn = !!x;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.log();
      },
    });
  }
}
