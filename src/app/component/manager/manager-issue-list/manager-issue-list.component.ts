import { Component } from '@angular/core';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ManagerService } from '../../../service/manager.service';

@Component({
  selector: 'app-manager-issue-list',
  standalone: true,
  imports: [ManagerNavbarComponent,NgFor,RouterLink],
  templateUrl: './manager-issue-list.component.html',
  styleUrl: './manager-issue-list.component.css'
})
export class ManagerIssueListComponent {

  issues:any[]=[];

  constructor(private managerService:ManagerService, private router:Router){
    this.fetchData();
 }

 fetchData(){
   this.managerService.getAllIssues().subscribe({
     next:(data)=>{
       for(let i=0;i<data.length;i++){
         const issue = {
           id: data[i].id,
           employeeName: data[i].employee.name,
           description: data[i].description,
           date: data[i].date,
           status: data[i].status,
         };
         this.issues.push(issue);
       }
     },
     error:(err)=>{
       console.log(err);
     }
   })
 }

 onClick(id: number) {
  this.router.navigate(['/reply',id]);
  }


}
