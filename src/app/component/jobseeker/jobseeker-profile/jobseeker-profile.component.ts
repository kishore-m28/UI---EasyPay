import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../../../service/jobseeker.service';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-jobseeker-profile',
  standalone: true,
  imports: [JobseekerNavbarComponent,NgFor],
  templateUrl: './jobseeker-profile.component.html',
  styleUrl: './jobseeker-profile.component.css'
})
export class JobseekerProfileComponent implements OnInit{

  basicJobseekerDetails:any={};

  constructor(private jobseekerService:JobseekerService){}

  ngOnInit(): void {
    this.getDetails();
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

}
