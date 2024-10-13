import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { ActivatedRoute } from '@angular/router';
import { HrService } from '../../../../service/hr.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-schedule-tech-interview',
  standalone: true,
  imports: [FormsModule, HrRecruitNavbarComponent, NgIf],
  templateUrl: './schedule-tech-interview.component.html',
  styleUrl: './schedule-tech-interview.component.css'
})
export class ScheduleTechInterviewComponent {

  id:any;
  interviewerId:any;
  interviewDate:string;
  fromTime:string;
  toTime:string;
  interviewLink:string;

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private actRoute:ActivatedRoute, private hrService:HrService){
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

  OnClick(appid: any, interviewerId: any) {
    this.hrService.postTechInterview(appid, interviewerId,{
      "date":this.interviewDate,
      "fromTime":this.fromTime,
      "toTime":this.toTime,
      "interviewLink":this.interviewLink
    }).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMsg="Interview scheduled"
      },
      error:(err)=>{
        console.log(err);   
        this.errorMsg = err.message;
      }
    })
  }

  resetmsg(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }


}
