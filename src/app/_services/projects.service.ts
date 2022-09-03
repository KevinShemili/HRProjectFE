import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getAllProjects() {
    return this.http.get("https://localhost:7006/Projekt/getAllProjects");
  }

  deleteProject(projectId: any) {
    return this.http.delete(`https://localhost:7006/Projekt/Delete/${projectId}`);
  }

  updateProject(projectId: any, model: any) {
    return this.http.put(`https://localhost:7006/Projekt/Put/${projectId}`, model);
  }

  addProject(model: any) {
    return this.http.post(`https://localhost:7006/Projekt`, model);
  }

}
