import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HrService } from '../../../../service/hr.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-schedule-hr-interview',
  standalone: true,
  imports: [HrRecruitNavbarComponent, FormsModule, NgIf],
  templateUrl: './schedule-hr-interview.component.html',
  styleUrl: './schedule-hr-interview.component.css'
})
export class ScheduleHrInterviewComponent {

  id:any;
  interviewerId:any;
  interviewDate:string;
  fromTime:string;
  toTime:string;
  interviewLink:string;

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private actRoute:ActivatedRoute, private hrSevice:HrService){
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }
  
  onClick() {
    this.hrSevice.postHrInterview(this.id,{
      "date":this.interviewDate,
      "fromTime":this.fromTime,
      "toTime":this.toTime,
      "interviewLink":this.interviewLink
    }).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMsg="Interview Scheduled";
      },
      error:(err)=>{
        console.log(err);
        this.errorMsg=err.message;
      }
    })
  }


  resetmsg() {
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }

}
