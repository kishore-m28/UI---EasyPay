import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../../../service/jobseeker.service';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { NgFor } from '@angular/common';
import { Job } from '../../../model/jobseeker/job.model';

@Component({
  selector: 'app-jobseeker-profile',
  standalone: true,
  imports: [JobseekerNavbarComponent,NgFor],
  templateUrl: './jobseeker-profile.component.html',
  styleUrl: './jobseeker-profile.component.css'
})
export class JobseekerProfileComponent implements OnInit{

  basicJobseekerDetails:any={};
  jobs:Job[]=[];
  HRScoreSheet:any={};
  TRScoreSheets:any={};
  overAllStatus:string;
   

  constructor(private jobseekerService:JobseekerService){
    

    this.jobseekerService.getHrRoundStatus()
    .subscribe({
      next:(data)=>{
        this.HRScoreSheet=data
        console.log(this.HRScoreSheet)
        if(this.HRScoreSheet.selectedForOffer){
          this.overAllStatus='SELECTED'
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })

    this.jobseekerService.getTechnicalStatus()
    .subscribe({
      next:(data)=>{
        this.TRScoreSheets=data
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  ngOnInit(): void {
    this.getDetails();
    this.overAllStatus='';

    this.jobseekerService.appliedJobs()
    .subscribe({
      next:(data)=>{
        this.jobs=data;
        console.log("No. of Applied Jobs:"+this.jobs.length);
      },
      error:(err)=>{
        console.log("failed to get applied jobs")
        console.log(err.message)
      }
    })
  }

  getDetails(){
    this.jobseekerService.getBasicJobSeekerDetail()
    .subscribe({
      next:(data)=>{
        this.basicJobseekerDetails=data;
        console.log(this.basicJobseekerDetails)
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

 /* appliedJob(){
    this.jobseekerService.appliedJobs()
    .subscribe({
      next:(data)=>{
        this.jobs=data;
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }*/

    /*
  hrStatus(){
    this.jobseekerService.getHrRoundStatus()
    .subscribe({
      next:(data)=>{
        this.HRstatus=data
        if(this.HRstatus=='CLEARED'){
          this.overAllStatus=='SELECTED'
        }
        if(this.HRstatus==null){
          this.overAllStatus=='PENDING'
        }
        if(this.HRstatus=='REJECTED'){
          this.overAllStatus=='NOT SELECTED'
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }*/

    /*
  TechnicalStatus(){
    this.jobseekerService.getTechnicalStatus()
    .subscribe({
      next:(data)=>{
        this.TRstatus=data
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }*/


}
