import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/_services/account.service';
import { PermissionsService } from 'src/app/_services/permissions.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  public id: any;
  public localStorageStuff: any;
  toShowTable = false
  toShowForm = false
  person: any = {};
  allPermissions: any = [];
  model: any = {};
  dateStart: string;
  dateEnd: string;
  permissionType: string;
  getUserDetailSub: Subscription
  getAllPermissionsSub: Subscription

  constructor(
    private PermissionsService: PermissionsService,
    private toastr: ToastrService,
    private acountService: AccountService
  ) { }

  ngOnInit(): void {
    this.localStorageStuff = JSON.parse(localStorage.getItem('token'))
    this.id = this.localStorageStuff.userId
    this.getUserDetailSub = this.acountService.getUserInfo(this.id).subscribe((result: any) => {
      this.person = result;
    });
    // this.getUserDetail(this.id);
    // this.getAllPermissions()
    this.getAllPermissionsSub = this.PermissionsService.getAllPermissions().subscribe((result: any) => {
      this.allPermissions = result;
    });
    setTimeout(()=> {
      this.toShowForm = this.checkRolesToShowForm()
    }, 300)
    // this.toShowForm = this.checkRolesToShowForm()
  }

  ngOnDestroy(): void {
    this.getAllPermissionsSub.unsubscribe();
    this.getUserDetailSub.unsubscribe();
  }

  // getUserDetail(id: any) {
  //   this.acountService.getUserInfo(id).subscribe((result: any) => {
  //     this.person = result;
  //   });
  // }

  // getAllPermissions() {
  //   this.PermissionsService.getAllPermissions().subscribe((result: any) => {
  //     this.allPermissions = result;
  //   });
  // }

  askPermission() {
    this.PermissionsService.askPermission(this.model, this.id).subscribe({
      next: () => {
        this.toastr.success('Successful permission!');
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

  approveLeje(lejeId: any) {
    this.PermissionsService.approvePermission(lejeId).subscribe({
      next: () => {
        this.toastr.success('Successful permission change!');
        this.getAllPermissionsSub = this.PermissionsService.getAllPermissions().subscribe((result: any) => {
          this.allPermissions = result;
        });
        // this.getAllPermissions()
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

  disapproveLeje(lejeId: any) {
    this.PermissionsService.dissaprovePermission(lejeId).subscribe({
      next: () => {
        this.toastr.success('Successful permission change!');
        this.getAllPermissionsSub = this.PermissionsService.getAllPermissions().subscribe((result: any) => {
          this.allPermissions = result;
        });
        // this.getAllPermissions()
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

  checkRolesToShowTable() {
    let show = false;

    if (this.person !== undefined && this.person !== null && this.person.userRolis !== undefined) {
      for (const role of this.person!.userRolis!) {
        if (role.roli!.roliEmri! === "HR Manager") {
          show = true;
          break;
        }
      }
      return show
    }
  }

  checkRolesToShowForm() {
    let show = true;

    if (this.person !== undefined && this.person !== null && this.person.userRolis !== undefined) {
      for (const role of this.person!.userRolis!) {
        if (role.roli!.roliEmri! === "HR Manager") {
          show = false;
        }
      }
    }
    return show
  }

  getBalancaLeje() {
    if (this.person !== undefined && this.person !== null && this.person.balancaLeje !== undefined) return this.person.balancaLeje;
  }

  cancel() {
    console.log("Cancel")
  }

}
