import { Component } from '@angular/core';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { ManagerService } from '../../../service/manager.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [ManagerNavbarComponent, NgFor],
  templateUrl: './leave-requests.component.html',
  styleUrl: './leave-requests.component.css'
})
export class LeaveRequestsComponent {

  leaveRequests:any[]=[];
  totalPages : number =0;  
  numArry:number[]=[];
  counter: number=0;
  page:number =0;
  size:number =2; 
  last:boolean=false; 
  first:boolean=false;

  constructor(private managerService:ManagerService, private router:Router){
    this.fetchData();
  }

  fetchData() {
    this.managerService.getAllLeaveRequests(this.page, this.size).subscribe({
      next: (data) => {
        
        this.leaveRequests = [];

        for (let i = 0; i < data.content.length; i++) {
          const leaveRequest = {
            id: data.content[i].id,
            name: data.content[i].employee.name,
            applyDate: data.content[i].applyDate,
            startDate: data.content[i].startDate,
            endDate: data.content[i].endDate,
            leaveType: data.content[i].leaveType,
            status: data.content[i].status
          };
          this.leaveRequests.push(leaveRequest);
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
      error: (err) => {
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
  
  approveLeave(id:number){
    this.managerService.approveLeave(id).subscribe({
      next:(data)=>{
       console.log(data);
       const leave = this.leaveRequests.find(request => request.id === id); // find() is a javascript array method that returns the first element in an array that satisfies the condition
       if (leave) {
         leave.status = 'APPROVED';
       }
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }
  rejectLeave(id:number){
    this.managerService.rejectLeave(id).subscribe({
      next:(data)=>{
        console.log(data);
        const leave = this.leaveRequests.find(request => request.id === id);
        if (leave) {
        leave.status = 'REJECTED';
        }
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }

}
