import { Component } from '@angular/core';
import { JobService } from '../../../service/job.service';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobseekerNavbarComponent,NgFor,NgIf],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

  job:any[]=[];

  constructor(private jobService:JobService){
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



}
