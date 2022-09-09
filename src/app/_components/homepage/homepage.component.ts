import { Component,Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AccountService } from 'src/app/_services/account.service';
import { UserDTO } from 'src/app/_models/UserDTO';
import { TokenDTO } from 'src/app/_models/TokenDTO';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  
  public UserProfile : any = null;
  public userId : any = null;
  localStorageStuff: any = null;


  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    
    this.userId = this.decodeToken().nameid;
    this.accountService.getUser(this.userId).subscribe(
      response =>{console.log(response);
      this.UserProfile = response;}
    )
  }

  private decodeToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }

 
}
