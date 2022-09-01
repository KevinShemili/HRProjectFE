import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Edukimm1Service {

    Url='https://localhost:7006/api/Edukim/GetAllEdukim';

  constructor (private httpclient:HttpClient){}

  getEdukim (){
    return this.httpclient.get(this.Url);
  }
  }






