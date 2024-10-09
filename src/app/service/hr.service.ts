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

  getAllJobs():Observable<any>{
    return this.http.get<any>('http://localhost:8081/job/all' , {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  postJob(obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/job/add', obj, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getJobDetailsById(id:any):Observable<any>{
    return this.http.get('http://localhost:8081/job/one/'+id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getJobSeekerDetails():Observable<any>{
    return this.http.get('http://localhost:8081/hr/jobseeker/status', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  performScreenTest(id:any):Observable<any>{
    return this.http.get('http://localhost:8081/hr/screentest/'+id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }
}
