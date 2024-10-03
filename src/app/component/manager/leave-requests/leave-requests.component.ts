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

  constructor(private managerService:ManagerService, private router:Router){
    this.fetchData();
  }

  fetchData(){
    this.managerService.getAllLeaveRequests().subscribe({
      next:(data)=>{
         for(let i=0;i<data.length;i++){
          const leaveRequest = {
            id: data[i].id,
            name: data[i].employee.name,
            applyDate: data[i].applyDate,
            startDate: data[i].startDate,
            endDate: data[i].endDate,
            leaveType:data[i].leaveType,
            status: data[i].status
          };
          this.leaveRequests.push(leaveRequest);
         }
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }

  approveLeave(id:number){
    this.managerService.approveLeave(id).subscribe({
      next:(data)=>{
        console.log(data);
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
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }

}
