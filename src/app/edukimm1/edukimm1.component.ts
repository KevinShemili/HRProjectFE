import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { Subscriber } from 'rxjs';
import { Edukimm1Service } from './edukimm1.service';

@Component({
  selector: 'app-edukimm1',
  templateUrl: './edukimm1.component.html',
  styleUrls: ['./edukimm1.component.css']
})
export class Edukimm1Component implements OnInit {



  constructor(private edukimService:Edukimm1Service){}
edukimdata :any=[];
  ngOnInit(): void {

    this.edukimService.getEdukim()
   .subscribe(
    (allData)=>{
    console.log(allData);
    this.edukimdata=allData;
    });
 }
}




























