import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http : HttpClient){}

  getData(obj:any):Observable<any>{

    return this.http.post('https://jsonplaceholder.typicode.com/posts',obj);
  }
}
