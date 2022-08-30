import { Component, OnInit } from '@angular/core';
import { NavbarHomepageService } from 'src/app/_services/navbar-homepage.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent implements OnInit {
  model: any = {};

  constructor(private homeNaVService: NavbarHomepageService) {}

  ngOnInit(): void {}

  register() {
    console.log(this.model);
  }

  cancel() {
    this.homeNaVService.toggledRegister = !this.homeNaVService.toggledRegister;
  }
}
