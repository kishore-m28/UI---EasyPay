import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


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

}