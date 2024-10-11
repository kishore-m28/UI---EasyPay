import { Component } from '@angular/core';
import { JobService } from '../../../service/job.service';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Job } from '../../../model/jobseeker/job.model';


@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobseekerNavbarComponent,NgFor,NgIf],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  job:Job[]=[];

  constructor(private jobService:JobService,private router:Router){
    this.jobService.getAllJob()
    .subscribe({
      next:(data)=>{
        this.job=data;
        console.log(this.job)
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  onClick(jobId:number){
    this.router.navigate(['/job-details', jobId])
  }



}
