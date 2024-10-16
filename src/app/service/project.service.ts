import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  assignedEmployees$ = new BehaviorSubject<any[]>([]);

  

  constructor(private http: HttpClient) { }

  setAssignedEmployees(employees: any[]): void {
    this.assignedEmployees$.next(employees);
  }


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

  getProjectType(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/project/types', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  addProject(project: any, selectedManagerId: any): Observable<any> {
    return this.http.post<any>('http://localhost:8081/project/add/'+selectedManagerId,project ,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getActiveCount():Observable<any>{
    return this.http.get<any>('http://localhost:8081/project/active-count',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getCompletedCount():Observable<any>{
    return this.http.get<any>('http://localhost:8081/project/completed-count',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getUpcomingCount():Observable<any>{
    return this.http.get<any>('http://localhost:8081/project/upcoming-count',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getOverdueCount():Observable<any>{
    return this.http.get<any>('http://localhost:8081/project/overdue-count',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getProjectById(pid: number): Observable<any> {
    return this.http.get<any>('http://localhost:8081/project/'+pid, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  assignEmployees(assignEmployeeData: any) : Observable<any>{
    console.log("assign api called")
    return this.http.post<any>('http://localhost:8081/project/assign-employees',assignEmployeeData ,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAllEmployeesByUsername(username: any) : Observable<any> {
    console.log(username);
    console.log("got employees by username api called")
    return this.http.get<any>('http://localhost:8081/project/employees?username='+username ,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getAllEmployeesByTitle(title: any): Observable<any> {
    return this.http.get<any>('http://localhost:8081/employees-by-title?title='+title ,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  updateProjectStatus(pid: number, status: string) : Observable<any>{
    return this.http.put('http://localhost:8081/project/update-status/'+pid+'?status='+status, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
}
