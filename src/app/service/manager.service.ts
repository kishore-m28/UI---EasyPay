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

  getAllLeaveRequests(page:number, size:number):Observable<any>{
    return this.http.get('http://localhost:8081/leave/all?page='+page+'&size='+size,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      })
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

  getAllIssues(page:number, size:number):Observable<any>{
    return this.http.get('http://localhost:8081/issue/all?page='+page+'&size='+size , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getIssueById(id:number):Observable<any>{
    return this.http.get('http://localhost:8081/issue/'+id , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getEmployeeProjectByEmployeeId(id:number):Observable<any>{
    return this.http.get('http://localhost:8081/manager/employee/project/'+id , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getEmployeesCount():Observable<any>{
    return this.http.get('http://localhost:8081/manager/employee/count', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getLeaveRequestsCount():Observable<any>{
    return this.http.get('http://localhost:8081/manager/leave/requests', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) 
    })
  }

  assignWork(id:number,obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/work/assign/'+id, obj, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  replyIssue(id:number,obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/issue/reply/'+id, obj, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }




}
