import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenDTO } from '../_models/TokenDTO';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  user: TokenDTO;

  constructor(private http:HttpClient) { }




  addDetails(model: any): Observable<any>{
    return this.http.post('https://localhost:7006/api/DetajeUser/AddDetails',model)
  }
 
  getAllDetails(): Observable<any> {
    return this.http.get("https://localhost:7006/api/DetajeUser/getAllDetails");
  }

}
