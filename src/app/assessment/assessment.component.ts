import { Component } from '@angular/core';
import { AssessmentService } from '../service/assessment.service';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css'
})
export class AssessmentComponent {

  constructor(private assesmentService : AssessmentService){}

  title:any;
  body:any;
  userId:number;

  // obj:any[]={

  fun(){
    this.assesmentService.getData({
      "title":this.title,
      "body":this.body,
      "userId":this.userId
    }).subscribe({
      next: (data) => {
        console.log("api post succes")
      },
      error: () => {
        console.log("api post failed")
      }
    })
  }
}
