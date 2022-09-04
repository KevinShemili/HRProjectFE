import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdukimService {


  constructor( private htppclient:HttpClient) { }

getAllEdukim():Observable<any>{
  return this.htppclient.get("https://localhost:7006/api/Edukim/GetAllEdukim");
}
deleteEdukim(EduId: any): Observable<any> {
  return this.htppclient.delete(`https://localhost:7006/Edukim/Delete/${EduId}`);
}

updateEdukim(EduId: any, model: any): Observable<any> {
  return this.htppclient.put(`https://localhost:7006/Edukim/Put/${EduId}`, model);
}

addEdukim(model: any): Observable<any> {
  return this.htppclient.post(`https://localhost:7006/Edukim`, model);
}
}

