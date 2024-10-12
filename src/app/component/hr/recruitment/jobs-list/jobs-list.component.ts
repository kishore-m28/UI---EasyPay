import { Component, OnInit } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { NgFor } from '@angular/common';
import { HrService } from '../../../../service/hr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgFor],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit{

  jobs:any[];

  constructor(private hrService:HrService, private router:Router){}

  ngOnInit(): void {
    this.fetchData()
  }


  fetchData() {
    this.hrService.getAllJobs().subscribe({
      next:(data)=>{
         this.jobs = data;
      },
      error:(err)=>{
         console.log(err);
      }
    })
  }

  onAddJob() {
    this.router.navigateByUrl("/hr/add-job")
  }

  onEdit(id:any) {
    this.router.navigateByUrl("/hr/edit-job/"+id)
  }

  onViewDetails(id: any) {
    this.router.navigateByUrl("/hr/job-details/"+id)
  }

}
