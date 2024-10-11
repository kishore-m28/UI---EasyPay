import { Component, OnInit } from '@angular/core';
import { HrRoundStatusComponent } from "../hr-round-status/hr-round-status.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ManagerService } from '../../../../service/manager.service';
import { HrService } from '../../../../service/hr.service';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";

@Component({
  selector: 'app-tech-round-status',
  standalone: true,
  imports: [HrRoundStatusComponent, NgFor, HrRecruitNavbarComponent],
  templateUrl: './tech-round-status.component.html',
  styleUrl: './tech-round-status.component.css'
})
export class TechRoundStatusComponent implements OnInit{

  techResults:any[];

  constructor(private router:Router, private hrService:HrService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getTechStatus().subscribe({
      next:(data)=>{
        this.techResults=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onClick(id: any) {
    this.router.navigateByUrl("/recruitment/schedule-hr-interview/"+id);
  }


}
