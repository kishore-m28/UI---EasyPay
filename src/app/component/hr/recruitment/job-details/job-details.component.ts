import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from '../../../../service/hr.service';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgIf],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{

  id:any;
  jobDetails:any;

  constructor(private actRoute:ActivatedRoute, private hrService:HrService, private router:Router){
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getJobDetailsById(this.id).subscribe({
      next:(data)=>{
        console.log(data);
        this.jobDetails=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onBack() {
    this.router.navigateByUrl("/recruitment/jobs-list")
  }

}
