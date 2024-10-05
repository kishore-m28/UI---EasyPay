import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../service/manager.service';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-assign-work',
  standalone: true,
  imports: [ManagerNavbarComponent, FormsModule, NgIf],
  templateUrl: './assign-work.component.html',
  styleUrl: './assign-work.component.css'
})
export class AssignWorkComponent implements OnInit{

  id:number;
  employeeName:string='';
  jobRole:string='';
  project:string='';
  projectType:string=''
  work:string='';

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private actRoute:ActivatedRoute, private managerService:ManagerService){}

  ngOnInit(): void {
    this.id=Number(this.actRoute.snapshot.paramMap.get('id'));
    this.fetchData(this.id);
  }

  fetchData(id:number){
    this.managerService.getEmployeeProjectByEmployeeId(id).subscribe({
      next:(data)=>{
        this.employeeName=data.employee.name;
        this.jobRole=data.employee.jobRole;
        this.projectType=data.project.projectType;
        this.project=data.project.projectDetails;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  assignWork(id:number){
    this.managerService.assignWork(id,{
     "details":this.work
  }).subscribe({
   next:(data)=>{
     this.successMsg = 'Work assigned';
     this.errorMsg = undefined
   },
   error:(err)=>{
     this.successMsg = undefined;
     if(err.status == 304){
      this.errorMsg = err.message;
     }
     console.log(err)
   }
 })
 }



}
