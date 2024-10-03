import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get('http://localhost:8081/manager/employee' , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAllLeaveRequests():Observable<any>{
    return this.http.get('http://localhost:8081/leave/all' , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  approveLeave(id:number):Observable<any>{
    return this.http.put('http://localhost:8081/leave/approval/'+id+'/APPROVED' , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  rejectLeave(id:number):Observable<any>{
    return this.http.put('http://localhost:8081/leave/'+id+'/REJECTED' , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }


}
