import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
export class EmployeeService{
    
    constructor(private http:HttpClient){}

    getPaySlip():Observable<any>{
        return this.http.get('http://localhost:8081/salary/payslip',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    postIssue(obj:any):Observable<any>{
        return this.http.post('http://localhost:8081/issue/add/employee',obj,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getIssue():Observable<any>{
        return this.http.get('http://localhost:8081/issue/get/username',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }
}