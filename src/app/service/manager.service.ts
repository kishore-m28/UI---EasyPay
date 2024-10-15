import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  
  getIdByUsername(username: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get('http://localhost:8081/manager/employee' , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  viewTask(username:string,page:number,size:number):Observable<any>{
    console.log("view task api called")
    return this.http.get('http://localhost:8081/work/view?username='+username+'&page='+page+'&size='+size, {
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

  viewWork(id:any, page:number, size:number):Observable<any>{
    return this.http.get('http://localhost:8081/work/get/'+id+'?page='+page+'&size='+size , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) 
    })
  }

  replyIssue(id:number,obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/issue/reply/'+id, obj, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getInterviews():Observable<any>{
    return this.http.get('http://localhost:8081/tech-interview/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) 
    })
  }

  updateScoreSheet(id:any, obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/tech-scoresheet/update/'+id, obj, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getAllManagers():Observable<any> {
    return this.http.get('http://localhost:8081/manager/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }
  getProjects():Observable<any>{
    return this.http.get('http://localhost:8081/manager/project', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getProjectStats():Observable<any>{
    return this.http.get('http://localhost:8081/manager/project/employee/stat', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getPresentCount():Observable<any>{
    return this.http.get('http://localhost:8081/employee/present', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getAbsentCount():Observable<any>{
    return this.http.get('http://localhost:8081/employee/absent', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

}
