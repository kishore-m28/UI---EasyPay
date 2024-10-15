import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Job } from "../model/jobseeker/job.model";


@Injectable({
    providedIn: 'root'
  })
export class JobService{
    
    private jobId:any

    constructor(private http:HttpClient){}


  setJobId(id: any): void {
    this.jobId = id;
  }

  getJobId():any{
    return this.jobId;
  }

  clearJobId(): void {
    this.jobId = null;
  }

    getAllJob():Observable<any>{
        return this.http.get('http://localhost:8081/job/display/specific/details')
    }

    getJobDescription(jobId:string):Observable<any>{
        return this.http.get<Job>('http://localhost:8081/job/one/'+jobId   
        )
    }

    applyJob(jobId:any):Observable<any>{
        return this.http.post('http://localhost:8081/jobSeeker/job/apply/'+jobId,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }


}