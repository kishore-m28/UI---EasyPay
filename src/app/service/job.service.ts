import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Job } from "../model/jobseeker/job.model";


@Injectable({
    providedIn: 'root'
  })
export class JobService{

    constructor(private http:HttpClient){}

    getAllJob():Observable<any>{
        return this.http.get('http://localhost:8081/job/display/specific/details',
            {
               headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getJobDescription(jobId:string):Observable<any>{
        return this.http.get<Job>('http://localhost:8081/job/one/'+jobId,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

}