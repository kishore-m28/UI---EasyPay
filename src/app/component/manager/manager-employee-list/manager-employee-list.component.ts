import { Component } from '@angular/core';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { ManagerService } from '../../../service/manager.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-manager-employee-list',
  standalone: true,
  imports: [ManagerNavbarComponent, NgFor],
  templateUrl: './manager-employee-list.component.html',
  styleUrl: './manager-employee-list.component.css'
})
export class ManagerEmployeeListComponent {


  employees:any[]=[];

  constructor(private managerService:ManagerService, private router:Router){
     this.fetchData();
  }

  fetchData(){
    this.managerService.getEmployees().subscribe({
      next:(data)=>{
        for(let i=0;i<data.length;i++){
          const employee = {
            id: data[i].id,
            name: data[i].name,
            gender: data[i].gender,
            contact: data[i].contact,
            jobRole: data[i].jobRole,
            dateOfJoining: data[i].dateOfJoining
          };
          this.employees.push(employee);
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  assign(id: number) {
    this.router.navigate(['/assignWork',id]);
  }

  OnViewStatus(id: any) {
    this.router.navigate(['/getStatus',id]);
  }

}
