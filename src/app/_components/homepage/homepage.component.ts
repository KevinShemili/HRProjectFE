import { Component, OnInit } from '@angular/core';
import { NavbarHomepageService } from 'src/app/_services/navbar-homepage.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  regToggled: any;

  constructor(public homeNaVService: NavbarHomepageService) {
    this.regToggled = this.homeNaVService.toggledRegister;
  }

  ngOnInit(): void {}
}
