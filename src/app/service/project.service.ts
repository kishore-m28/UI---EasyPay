import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjectByEmployeeId(eid: number):Observable<any> {
    return this.http.get<any>('http://localhost:8081/project/employee/'+eid,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAllEmployees(page: number, size: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/employee/all?page=' + page + '&size=' + size, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
