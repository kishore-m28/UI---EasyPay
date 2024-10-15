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
  totalPages : number =0;  
  numArry:number[]=[];
  counter: number=0;
  page:number =0;
  size:number =5; 
  last:boolean=false; 
  first:boolean=false;

  constructor(private managerService:ManagerService, private router:Router){
    this.fetchData();
 }

 fetchData(){
   this.managerService.getAllIssues(this.page,this.size).subscribe({
     next:(data)=>{

       this.issues=[];

       for(let i=0;i<data.content.length;i++){
         const issue = {
           id: data.content[i].id,
           employeeName: data.content[i].employee.name,
           description: data.content[i].description,
           date: data.content[i].date,
           status: data.content[i].status,
         };
         this.issues.push(issue);
       }
       this.totalPages=data.totalPages;
        this.first=data.first;
        this.last=data.last;
        if(this.counter === 0){
          let i=0;
          while(i<this.totalPages){
              this.numArry.push(i);  
              i++;
            };
          }
        this.counter = this.counter+1;
     },
     error:(err)=>{
       console.log(err);
     }
   })
 }
 onPageNumberClick(n:number){
  this.page = n; 
  this.fetchData();
 }

 onNext(){
  this.page = this.page + 1; 
  this.fetchData();

 }

 onPrev(){
  this.page = this.page - 1;
  this.fetchData();
 }

 onClick(id: number) {
  this.router.navigate(['/reply',id]);
  }


}
