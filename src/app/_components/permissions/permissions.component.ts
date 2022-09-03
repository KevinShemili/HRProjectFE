import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  person: any;
  allPermissions: any = [];
  // allPermissionsFiltered: any = []
  model: any = {};
  dateStart: string;
  dateEnd: string;
  permissionType: string;

  constructor(
    private PermissionsService: PermissionsService,
    private toastr: ToastrService,
    private acountService: AccountService
  ) { }

  ngOnInit(): void {
    this.localStorageStuff = JSON.parse(localStorage.getItem('token'))
    this.id = this.localStorageStuff.userId
    this.getUserDetail(this.id);
    this.getAllPermissions()
    // this.getAllPermissionsFiltered()
  }

  getUserDetail(id: any) {
    this.acountService.getUserInfo(id).subscribe((result: any) => {
      this.person = result;
    });
  }

  // getAllPermissionsFiltered() {
  //   const copyArray = [...this.allPermissions]
  //   const finalArray = copyArray.filter(item => item.aprovuar === 2)
  //   return finalArray
  // }

  getAllPermissions() {
    this.PermissionsService.getAllPermissions().subscribe((result: any) => {
      this.allPermissions = result;
    });
  }

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
        this.getAllPermissions()
        // const copyArray = [...this.allPermissions]
        // const finalArray = copyArray.filter(item => item.id !== lejeId)
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
        this.getAllPermissions()
        // const copyArray = [...this.allPermissions]
        // const finalArray = copyArray.filter(item => item.id !== lejeId)
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

    for (const role of this.person?.userRolis) {
      if (role.roli.roliEmri === "HR Manager") {
        show = true;
        break;
      }
    }
    return show
  }

  checkRolesToShowForm() {
    let show = true;

    for (const role of this.person?.userRolis) {
      if (role.roli.roliEmri === "HR Manager") {
        show = false;
      }
    }

    return show
  }

  cancel() {
    console.log("Cancel")
  }

}
