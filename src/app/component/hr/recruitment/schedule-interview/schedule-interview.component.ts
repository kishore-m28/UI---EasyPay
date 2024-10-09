import { Component, OnInit } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { Router } from '@angular/router';
import { HrService } from '../../../../service/hr.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-schedule-interview',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgFor],
  templateUrl: './schedule-interview.component.html',
  styleUrl: './schedule-interview.component.css'
})
export class ScheduleInterviewComponent implements OnInit{

  jobSeekerDetails:any[];

  constructor(private router:Router, private hrService:HrService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getJobSeekerDetails().subscribe({
      next:(data)=>{
        this.jobSeekerDetails = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  OnScreenTest(id:any) {
    this.hrService.performScreenTest(id).subscribe({
      next:(data)=>{
        console.log(data);
        const job = this.jobSeekerDetails.find(e => e.applicationId === id);
        if(job){
          if(data.status=="CLEARED"){
            job.screenTestStatus="CLEARED"
         }
         if(data.status=="REJECTED"){
           job.screenTestStatus="REJECTED"
        } 
        }    
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
  onTechInterview() {
    this.router.navigateByUrl("/recruitment/schedule-tech-interview");
  }
  onHrInterview() {
    this.router.navigateByUrl("/recruitment/schedule-hr-interview");
  }

}
