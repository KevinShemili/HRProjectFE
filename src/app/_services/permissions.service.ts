import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  apiUrl = 'https://localhost:7006/User/';
  
  constructor(private http: HttpClient) {
  }

  askPermission(model: any, id:number) {
    return this.http.post(this.apiUrl + `AssignLejeToUser/${id}`, model);
  }

  approvePermission(lejeId: any) {
    return this.http.post(this.apiUrl + `ApproveLeje/${lejeId}`, {});
  }

  dissaprovePermission(lejeId: any) {
    return this.http.post(this.apiUrl + `DisapproveLeje/${lejeId}`, {});
  }

  getAllPermissions() {
    return this.http.get("https://localhost:7006/Leje/getAllLeje");
  }

}
