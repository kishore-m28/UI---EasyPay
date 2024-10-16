import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  basicInfo$= new BehaviorSubject({
    name: '',
    gender:'',
    contact:'',
    dept:'',
    designation:'',
    dob:'',
    joiningdate:''

  });

  constructor(private http : HttpClient) { }
  // setter for behavior subject
  setBasicInfo(name:string,gender:string,contact:string,dept:string,designation:string,dob:string,joiningdate:string):void{
    this.basicInfo$.next({
      'name': name,
      'gender':gender,
      'contact':contact,
      'dept':dept,
      'designation':designation,
      'dob':dob,
      'joiningdate':joiningdate
    });
  }

  // for connecting APIs
  saveBasicInfo(basicInfo: any):Observable<any> {
    console.log("api called")
    return this.http.post('http://localhost:8081/employee/add/basic-info', basicInfo ,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

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