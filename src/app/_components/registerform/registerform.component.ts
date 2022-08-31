import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent implements OnInit {
  model: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  register() {
    console.log(this.model.isAdminCheck);
    console.log(this.model.isHRManagerCheck);
    console.log(this.model.isHRSpecialistCheck);
    console.log(this.model.isBoardMemberCheck);
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }
}
