import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[]; // will be passed the roles on the html file
  tokenRoles: string[]; // roles in payload
  jwtHelper = new JwtHelperService();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.tokenRoles = this.decodeToken().role;
    if (this.tokenRoles.some((r) => this.appHasRole.includes(r))) {
      // check if roles passed to directive exist in payload
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else this.viewContainerRef.clear;
  }

  private decodeToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }
}
