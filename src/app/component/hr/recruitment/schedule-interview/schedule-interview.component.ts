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
  
  onTechInterview() {
    this.router.navigateByUrl("/recruitment/schedule-tech-interview");
  }
  onHrInterview() {
    this.router.navigateByUrl("/recruitment/schedule-hr-interview");
  }

}
