import { Component, OnInit } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HrService } from '../../../../service/hr.service';

@Component({
  selector: 'app-screen-test',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgFor],
  templateUrl: './screen-test.component.html',
  styleUrl: './screen-test.component.css'
})
export class ScreenTestComponent implements OnInit{

  jobSeekerDetails:any[];

  constructor(private router:Router, private hrService:HrService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getJobSeekerDetails().subscribe({
      next:(data)=>{
        console.log(data);
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

  onJobSeekerClick(id:any) {
    this.router.navigateByUrl("/recruitment/job-seeker-details/"+id)
  }
  
  onTechInterview(id:any) {
    this.router.navigateByUrl("/recruitment/schedule-tech-interview/"+id);
  }
 


}
