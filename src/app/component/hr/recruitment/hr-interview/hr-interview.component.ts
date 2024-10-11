import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { HrService } from '../../../../service/hr.service';

@Component({
  selector: 'app-hr-interview',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgFor],
  templateUrl: './hr-interview.component.html',
  styleUrl: './hr-interview.component.css'
})
export class HrInterviewComponent {

  hrInterviews:any[];

  constructor(private router:Router, private hrService:HrService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getHrInterviews().subscribe({
      next:(data)=>{
        console.log(data);
        this.hrInterviews=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onScoreSheetClick(id:any) {
    this.router.navigateByUrl("/recruitment/hr-scoresheet/"+id);
  }
}
