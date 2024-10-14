import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
export class salaryComputeService{

    private employeeFilter = {
        department: '',
        designation: '',
        city: ''
      };
    
      private employeeList: any[] = [];
      private computedEmployeeIds: number[] = [];

    constructor(private http:HttpClient){}

    // Save filter state
  setEmployeeFilter(filter: any) {
    this.employeeFilter = filter;
  }

  // Get filter state
  getEmployeeFilter() {
    return this.employeeFilter;
  }

   // Save employee list
   setEmployeeList(employee: any[]) {
    this.employeeList = employee;
  }

  // Get employee list
  getEmployeeList() {
    return this.employeeList;
  }

  // Store computed employee IDs
  setComputedEmployeeIds(ids: number[]): void {
    this.computedEmployeeIds = ids;
  }

  // Get computed employee IDs
  getComputedEmployeeIds(): number[] {
    return this.computedEmployeeIds;
  }

    getEmployeeFilterDetails(obj: any): Observable<any> {  
        return this.http.post('http://localhost:8081/employee/display/filter',obj,
          {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')),
          });
      }

    getDesignation():Observable<any>{
        return this.http.get('http://localhost:8081/employee/designation',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getDepartment():Observable<any>{
        return this.http.get('http://localhost:8081/employee/department',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getCity():Observable<any>{
        return this.http.get('http://localhost:8081/employee/city',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    computeSalary(id:any):Observable<any>{
      return this.http.post('http://localhost:8081/salary/compute/'+id,{},
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        }
      )
    }

    salaryToPending(id:any):Observable<any>{
      return this.http.post('http://localhost:8081/salary/status/pending/'+id,
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        }
      )
    }

    getReviewPayrollDetails(obj:any):Observable<any>{
      return this.http.post('http://localhost:8081/salary/filter/display',obj,
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        }
      )
    }

    processPayroll(employeeIds: number[]):Observable<any>{
      return this.http.post('http://localhost:8081/salary/process/inBatch',employeeIds,
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        }
      )
    }

}