import { Component, OnInit } from '@angular/core';
import { RecruitNavbarComponent } from "../recruit-navbar/recruit-navbar.component";
import { Router } from '@angular/router';
import { ManagerService } from '../../../../service/manager.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-technical-interview',
  standalone: true,
  imports: [RecruitNavbarComponent, NgFor],
  templateUrl: './technical-interview.component.html',
  styleUrl: './technical-interview.component.css'
})
export class TechnicalInterviewComponent implements OnInit{

  techInterviews:any[];

  constructor(private router:Router, private managerService:ManagerService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.managerService.getInterviews().subscribe({
      next:(data)=>{
           this.techInterviews=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  onScoreSheetClick(id:any) {
    this.router.navigateByUrl("/recruitment/technical-scoresheet/"+id);
  }



}
