import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  getAllEmployeeApi: string = 'http://localhost:8081/employee/all';
  
  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.http.get<any>(this.getAllEmployeeApi , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
