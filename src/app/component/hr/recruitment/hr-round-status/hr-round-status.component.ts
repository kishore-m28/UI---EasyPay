import { Component, OnInit } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { NgFor } from '@angular/common';
import { HrService } from '../../../../service/hr.service';

@Component({
  selector: 'app-hr-round-status',
  standalone: true,
  imports: [HrRecruitNavbarComponent, NgFor],
  templateUrl: './hr-round-status.component.html',
  styleUrl: './hr-round-status.component.css'
})
export class HrRoundStatusComponent implements OnInit{

  hrResults:any[];

  constructor(private hrService:HrService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.hrService.getHrStatus().subscribe({
      next:(data)=>{
        console.log(data);
        this.hrResults=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


}
