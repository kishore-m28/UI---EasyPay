import { Component, OnInit } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from '../../../../service/hr.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-job-seeker-details',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgIf],
  templateUrl: './job-seeker-details.component.html',
  styleUrl: './job-seeker-details.component.css'
})
export class JobSeekerDetailsComponent implements OnInit{

  id:any;
  jobSeekerDetails:any

  constructor(private actRoute:ActivatedRoute, private hrService:HrService, private router:Router ){
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getApplicantDetailsByApplicationId(this.id).subscribe({
      next:(data)=>{
        console.log(data);
        this.jobSeekerDetails = data.jobSeeker;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onBack() {
    this.router.navigateByUrl("/recruitment/screen-test")
  }



}
