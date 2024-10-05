import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
  })
export class JobseekerService{

    constructor(private http:HttpClient){}

    addJobseeker(obj:any):Observable<any>{
        return this.http.post('http://localhost:8081/jobSeeker/add',obj,
        {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        })
    }

    getBasicJobSeekerDetail():Observable<any>{
        return this.http.get('http://localhost:8081/jobSeeker/basic/details',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

}