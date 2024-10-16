import { Component, OnInit } from '@angular/core';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { JobseekerService } from '../../../service/jobseeker.service';
import { Job } from '../../../model/jobseeker/job.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-jobseeker-dashboard',
  standalone: true,
  imports: [JobseekerNavbarComponent,NgFor,NgIf],
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrl: './jobseeker-dashboard.component.css'
})
export class JobseekerDashboardComponent implements OnInit{
  username:any=localStorage.getItem('username');
  offeredJobs:Job[]=[];
  technicalInterview:any={}

  constructor(private jobseekerService:JobseekerService){
    this.jobseekerService.getTechnicalInterviewLink()
    .subscribe({
      next:(data)=>{
      this.technicalInterview=data
      console.log(this.technicalInterview)},
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  ngOnInit(): void {
    this.jobseekerService.getOfferDetails()
    .subscribe({
      next:(data)=>{
        this.offeredJobs=data;
        console.log(this.offeredJobs)
      },
      error:(err)=>{
        console.log(err.message)
      }
    }) 
  }

  

}
