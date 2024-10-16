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

    jobSeekerSignUp(obj:any):Observable<any>{
        return this.http.post('http://localhost:8081/auth/signup/jobseeker',obj)
    }

    appliedJobs():Observable<any>{
        return this.http.get('http://localhost:8081/jobSeeker/display/applied/jobs',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
        
    }

    getOfferDetails():Observable<any>{
        return this.http.get('http://localhost:8081/offer/details/jobseeker',
             {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getHrRoundStatus():Observable<any>{
        return this.http.get('http://localhost:8081/jobseeker/hrRound/status',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getTechnicalStatus():Observable<any>{
        return this.http.get('http://localhost:8081/jobseeker/technicalRound/status',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    getTechnicalInterviewLink():Observable<any>{
        return this.http.get('http://localhost:8081/jobseeker/getTechInterview/link',
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

    applyForJob(jobId:any):Observable<any>{
        return this.http.post('http://localhost:8081/apply/job/'+jobId,{},
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }
        )
    }

}