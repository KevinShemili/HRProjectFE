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
    console.log(this.model);
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }
}
