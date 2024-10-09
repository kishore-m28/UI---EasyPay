import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HrService } from '../../../../service/hr.service';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [HrRecruitNavbarComponent, FormsModule, NgIf],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {

  jobTitle:string;
  jobType:string;
  description:string;
  requirements:string;
  startDate:string;
  endDate:string;
  location:string;
  ctc:number;
  experienceRequired:number;
  skill1:string;
  skill2:string;
  skill3:string;

  successMsg:string=undefined;
  errorMsg:string=undefined;
  
  constructor(private router:Router, private hrService:HrService){}



  resetmsg(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }

  onClickAdd() {
    this.hrService.postJob({
      "jobTitle":this.jobTitle,
      "jobType":this.jobType,
      "description":this.description,
      "requirements":this.requirements,
      "startDate":this.startDate,
      "endDate":this.endDate,
      "location":this.location,
      "ctc":this.ctc,
      "experienceRequired":this.experienceRequired,
      "skill1":this.skill1,
      "skill2":this.skill2,
      "skill3":this.skill3
    }).subscribe({
      next:(data)=>{
        this.successMsg="Job added",
        this.errorMsg=undefined;
      },
      error:(err)=>{
        this.successMsg=undefined;
        if(err.status==304){
          this.errorMsg=err.message
        }
        console.log(err);
      }
    })
  }

}
