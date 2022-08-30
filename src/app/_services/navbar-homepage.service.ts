import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarHomepageService {
  toggledRegister: boolean;

  constructor() {}

  get getToggleReg(): boolean {
    return this.toggledRegister;
  }

  set setToggleReg(val: boolean) {
    this.toggledRegister = val;
  }
}
