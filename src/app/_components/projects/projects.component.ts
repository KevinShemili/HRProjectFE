import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public id: any;
  public localStorageStuff: any;
  person: any;
  model: any = {};
  allProjects: any = [];

  constructor(
    private ProjectsService: ProjectsService,
    private toastr: ToastrService,
    private acountService: AccountService
  ) { }

  ngOnInit(): void {
    this.localStorageStuff = JSON.parse(localStorage.getItem('token'))
    this.id = this.localStorageStuff.userId
    this.getUserDetail(this.id);
    this.getAllProjects()
  }

  getUserDetail(id: any) {
    this.acountService.getUserInfo(id).subscribe((result: any) => {
      this.person = result;
    });
  }

  getAllProjects() {
    this.ProjectsService.getAllProjects().subscribe((result: any) => {
      this.allProjects = result;
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

  deleteProject(projectId: any) {
    this.ProjectsService.deleteProject(projectId).subscribe({
      next: () => {
        this.toastr.success('Successful permission change!');
        this.getAllProjects()
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

  updateProject(projectId: any, model: any) {
    this.ProjectsService.updateProject(projectId, model).subscribe({
      next: () => {
        this.toastr.success('Successful project change!');
        this.getAllProjects()
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
