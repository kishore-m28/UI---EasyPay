import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../service/job.service';
import { Job } from '../../../model/jobseeker/job.model';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [RouterModule, JobseekerNavbarComponent],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css'
})
export class JobDescriptionComponent implements OnInit {

  job:Job;
  jobId:string;

  constructor(private jobService:JobService,
    private actRoute: ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.jobId=this.actRoute.snapshot.paramMap.get('jobId') // Using the unary + operator to convert string to number
    this.jobService.getJobDescription(this.jobId)
    .subscribe({
      next:(data)=>{
        this.job=data;
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  /*getJob(){
    this.jobService.getJobDescription()
    .subscribe({
      next:(data)=>{
        this.job=data;
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  } */

    navigateToJobList():void{
      this.router.navigateByUrl('/job/allJobs')
    }

    onApplyClick(id:any){
      this.jobService.setJobId(id);
      localStorage.setItem('jobId', id);
      this.router.navigateByUrl('jobSeeker/signUp')
    }

}
