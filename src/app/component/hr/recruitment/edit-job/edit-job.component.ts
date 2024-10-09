import { Component, OnInit } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { HrService } from '../../../../service/hr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [HrRecruitNavbarComponent, FormsModule, NgIf],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent implements OnInit{

  id:any;
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

  constructor(private hrService:HrService, private router:Router, private actRoute:ActivatedRoute){
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.hrService.getJobDetailsById(this.id).subscribe({
      next:(data)=>{
       this.jobTitle=data.jobTitle;
       this.jobType=data.jobType;
       this.description=data.description;
       this.requirements=data.requirements;
       this.startDate=data.startDate;
       this.endDate=data.endDate;
       this.location=data.location;
       this.ctc=data.ctc;
       this.experienceRequired=data.experienceRequired;
       this.skill1=data.skill1;
       this.skill2=data.skill2;
       this.skill3=data.skill3
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  resetmsg(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }

  

  onClickEdit(id: any) {
    this.hrService.postJob({
      "id":this.id,
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
        this.successMsg="Job updated",
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
