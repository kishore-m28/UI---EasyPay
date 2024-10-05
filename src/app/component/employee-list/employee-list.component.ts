import { Component } from '@angular/core';
import { HrService } from '../../service/hr.service';
import { HrBrandNavbarComponent } from "../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../hr-navbar/navbar.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent,NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: any[] = [];
  
  constructor(private hrservice: HrService){ 
    this.hrservice.getAllEmployees().subscribe({
      next: (data)=>{
        this.employees = data; 
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
