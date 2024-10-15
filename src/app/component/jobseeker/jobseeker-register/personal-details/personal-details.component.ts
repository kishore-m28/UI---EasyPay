import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../../../../service/jobseeker.service';
import { Jobseeker } from '../../../../model/jobseeker/jobseeker.model';
import { JobseekerNavbarComponent } from "../../jobseeker-navbar/jobseeker-navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resume } from '../../../../model/jobseeker/resume.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../../../service/job.service';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [JobseekerNavbarComponent,NgIf,FormsModule,NgFor],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent implements OnInit {

  jobseeker:Jobseeker;
  successMsg:string=undefined;
  errorMsg:string=undefined;
  gender:string[]=['MALE','FEMALE'];
  show:boolean=false;
  id:any;
 
  


  constructor(private jobseekerService:JobseekerService,private router:Router){}
  
  ngOnInit(): void {
    this.jobseeker=new Jobseeker();
    this.jobseeker.resume=new Resume();
  }

  onClick(){
    this.jobseekerService.addJobseeker(this.jobseeker)
    .subscribe({
      next:(data)=>{
        this.successMsg='Registered Successfully'
        this.errorMsg=undefined;
        console.log(data)
        this.show=true;
      },
      error:(err)=>{
        this.successMsg=undefined;
        console.log(err)
        this.errorMsg=err.message
      }
    })
  }

  resetmsg(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }

  applyJob(){
    let jobId=localStorage.getItem('jobId')
    this.router.navigateByUrl('/job/apply/'+jobId);
  }

}
