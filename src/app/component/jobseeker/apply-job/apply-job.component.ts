import { Component } from '@angular/core';
import { JobseekerService } from '../../../service/jobseeker.service';
import { ActivatedRoute } from '@angular/router';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { Job } from '../../../model/jobseeker/job.model';

@Component({
  selector: 'app-apply-job',
  standalone: true,
  imports: [JobseekerNavbarComponent],
  templateUrl: './apply-job.component.html',
  styleUrl: './apply-job.component.css'
})
export class ApplyJobComponent {

  jobId:any;
  appliedJob:any={}
  job:Job;

  constructor(private jobSeekerService:JobseekerService,private actRoute:ActivatedRoute){
    this.jobId=this.actRoute.snapshot.paramMap.get('jobId');
    this.jobSeekerService.applyForJob(this.jobId)
    .subscribe({
      next:(data)=>{
        this.appliedJob=data;
        this.job=this.appliedJob.job;
        console.log('applied successfully')
      },
      error:(err)=>{
        console.log(err.message)}
    })
  }

}
