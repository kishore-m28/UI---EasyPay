import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {


  constructor(private http: HttpClient) { }

  getAllEmployees(page: number, size: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/employee/all?page=' + page + '&size=' + size, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  updateInactive(id: number) {
    return this.http.put<any>('http://localhost:8081/employee/delete/' + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getCountOfEmployees() {
    console.log("api called")
    return this.http.get<any>('http://localhost:8081/employee/active-count', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAllProjects(page: number, size: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/project/all?page=' + page + '&size=' + size, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getMinimumWageCompliance() {
    console.log("getMinimumWageCompliance api called")
    return this.http.get<any>('http://localhost:8081/compliance-report/view/1', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}