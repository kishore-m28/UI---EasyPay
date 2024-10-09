import { Component, OnInit } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { ManagerService } from '../../../service/manager.service';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [HrBrandNavbarComponent, ManagerNavbarComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent implements OnInit{

  numberOfEmployees:number;
  numberOfLeaveRequests:number;

  constructor(private managerService:ManagerService){}

  ngOnInit(): void {
    this.fetchEmployeeCount();
    this.fetchLeaveRequestsCount();
  }

  fetchEmployeeCount(){
    this.managerService.getEmployeesCount().subscribe({
      next:(data)=>{
        this.numberOfEmployees = data;
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }

  fetchLeaveRequestsCount(){
    this.managerService.getLeaveRequestsCount().subscribe({
      next:(data)=>{
        console.log(data);
        this.numberOfLeaveRequests=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }



}
