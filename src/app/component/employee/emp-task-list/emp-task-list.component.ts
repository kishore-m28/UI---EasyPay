import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../service/manager.service';
import { ManagerNavbarComponent } from "../../manager/manager-navbar/manager-navbar.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-emp-task-list',
  standalone: true,
  imports: [ManagerNavbarComponent,NgFor,NgClass],
  templateUrl: './emp-task-list.component.html',
  styleUrl: './emp-task-list.component.css'
})
export class EmpTaskListComponent implements OnInit{

  id:any=2;
  works:any[]=[];
  totalPages : number =0;  
  numArry:number[]=[];
  counter: number=0;
  page:number =0;
  size:number =2; 
  last:boolean=false; 
  first:boolean=false;

  username:any=localStorage.getItem('username');

  constructor(private actRoute:ActivatedRoute, private managerService:ManagerService){}

  ngOnInit(): void {
    this.fetchData(this.id);
  }

  
  fetchData(id:any){
    this.managerService.viewTask(this.username,this.page,this.size).subscribe({
      next:(data)=>{
 
        this.works=[];
 
        for(let i=0;i<data.content.length;i++){
          const work = {
            details: data.content[i].details,
            assignedDate: data.content[i].assignedDate,
            status: data.content[i].status,
            project:data.content[i].project,
            manager:data.content[i].manager.name
          };
          this.works.push(work);
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
   this.fetchData(this.id);
  }
 
  onNext(){
   this.page = this.page + 1; 
   this.fetchData(this.id);
 
  }
 
  onPrev(){
   this.page = this.page - 1;
   this.fetchData(this.id);
  }

}
