import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';
import { PersonalService } from 'src/app/_services/personal.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

public id:any=null;
public localStorageStuff:any=null;
public showNew:boolean=false;
public DUId:any=null;
person:any=null;
model:any={};
allDetails:any=[];

  constructor(
    //private form:FormBuilder,
    private router: Router,
    public personalService:PersonalService,
    private toastr:ToastrService,
    private acacountService:AccountService,) { }


  ngOnInit(): void {}




  addDetails()
  {
  
    this.personalService.addDetails(this.model).subscribe({
      next:()=>{
        this.toastr.success('Success');
         },
        
      
  
    error:(e)=> {
      console.error(e);
      this.toastr.error(e.error);
    },
    complete:()=>{
      console.log();
    },
      
    }) ;
  }
    
  onNewForm() {
    
    this.showNew = true;
    this.model = {}
  }
}
