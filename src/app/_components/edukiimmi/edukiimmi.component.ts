import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { Subscriber, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { EdukimService } from 'src/app/_services/edukim.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edukiimmi',
  templateUrl: './edukiimmi.component.html',
  styleUrls: ['./edukiimmi.component.css']
})
export class EdukiimmiComponent implements OnInit {


  public id: any = null;
  public localStorageStuff: any = null;
  public showNew: boolean = false;
  public showEdit: boolean = false;
  public EduId:any=null;
  person: any = null;
  model: any = {};
  allEdukim:any=null;
  getAllEdukimsSub: Subscription;
  getUserDetailSub: Subscription;



  constructor( private edukimservice:EdukimService,
    private toastr: ToastrService,
    private accountService:AccountService,
    private router: Router, ) { }

    ngOnInit(): void {

      this.localStorageStuff = JSON.parse(localStorage.getItem('token'))
    this.id = this.localStorageStuff.userId
    this.getUserDetailSub = this.accountService.getUserInfo(this.id).subscribe((result: any) => {
      this.person = result;
    });
    this.getAllEdukimsSub = this.edukimservice.getAllEdukim().subscribe((result: any) => {
      this.allEdukim = result;
    });
    }



    ngOnDestroy(): void {
      this.getAllEdukimsSub.unsubscribe();
      this.getUserDetailSub.unsubscribe();
    }


    checkRolesToShowTable() {
      let show = false;

      for (const role of this.person?.userRolis) {
        if (role.roli.roliEmri === "HR Manager") {
          show = true;
          break;
        }
      }
      return show
    }
    deleteEdukim(EduId: any) {
      this.edukimservice.deleteEdukim(EduId).subscribe({
        next: () => {
          this.toastr.success('Successful edukim deleted!');
          this.getAllEdukimsSub = this.edukimservice.getAllEdukim().subscribe((result: any) => {
            this.allEdukim = result;
          });

        },
        error: (e) => {
          console.error(e);
          this.toastr.error(e.error);
        },
        complete: () => {
          console.log();
        },
      });
    }
    UpdateEdukim() {
      this.edukimservice.updateEdukim(this.EduId, this.model).subscribe({
        next: () => {
          this.toastr.success('Successful edukim change!');
          this.getAllEdukimsSub = this.edukimservice.getAllEdukim().subscribe((result: any) => {
            this.allEdukim = result;
          });

        },
        error: (e) => {
          console.error(e);
          this.toastr.error(e.error);
        },
        complete: () => {
          console.log();
        },
      });
    }
  }








