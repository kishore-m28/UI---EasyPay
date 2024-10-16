import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  getGenderStat() {
    return this.http.get<any>('http://localhost:8081/employee/gender/stat', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
  
  getProjectById(pid: number) {
    return this.http.get<any>('http://localhost:8081/project/'+pid, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }


  constructor(private http: HttpClient) { }

  getAllEmployees(page: number, size: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/employee/all?page=' + page + '&size=' + size, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
  getAllProjects(page: number, size: number): Observable<any> {
    console.log("get all projects api called");
    return this.http.get<any>('http://localhost:8081/project/all/in-progress?page=' + page + '&size=' + size, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getCompletedProjects(page: number, size: number): Observable<any> {
    console.log("get all projects api called");
    return this.http.get<any>('http://localhost:8081/project/all/completed?page=' + page + '&size=' + size, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  updateInactive(id: number) {
    return this.http.put<any>('http://localhost:8081/employee/delete/' + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  updateStatus(pid: number) {
    return this.http.put<any>('http://localhost:8081/project/set/status/completed/' + pid, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getCountOfEmployees() {
    console.log("api called")
    return this.http.get<any>('http://localhost:8081/employee/active-count', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getMinimumWageCompliance() {
    console.log("getMinimumWageCompliance api called")
    return this.http.get<any>('http://localhost:8081/compliance-report/view/1', {
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
    return this.http.get('http://localhost:8081/jobseeker/application/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  performScreenTest(id:any):Observable<any>{
    return this.http.get('http://localhost:8081/hr/screentest/'+id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  empList$= new BehaviorSubject< number[] >([]);

  setEmpList(employees:any[]):void{
    this.empList$.next(employees);
}
  postTechInterview(appid:any, recruiterid:any, obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/tech-interview/schedule/'+appid+'/'+recruiterid, obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getTechStatus():Observable<any>{
    return this.http.get('http://localhost:8081/tech-scoresheet/status/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  postHrInterview(id:any, obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/hr-interview/schedule/'+id, obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getHrInterviews():Observable<any>{
    return this.http.get('http://localhost:8081/hr-interview/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  updateScoreSheet(id:any, obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/hr-scoresheet/update/'+id, obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getHrStatus():Observable<any>{
    return this.http.get('http://localhost:8081/hr-scoresheet/status/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

  getApplicantDetailsByApplicationId(id:any):Observable<any>{
    return this.http.get('http://localhost:8081/jobseeker/details/'+id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
  }

}
