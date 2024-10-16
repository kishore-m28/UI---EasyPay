import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { EmpNavbarComponent } from "../emp-navbar/emp-navbar.component";
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payslip',
  standalone: true,
  imports: [BrandNavbarComponent, EmpNavbarComponent,CommonModule],
  templateUrl: './payslip.component.html',
  styleUrl: './payslip.component.css'
})
export class PayslipComponent {

  salary:any={}
  employee:any={}

  constructor(private employeeService:EmployeeService){
    this.employeeService.getPaySlip()
    .subscribe({
      next:(data)=>{
        this.salary=data;
        this.employee=this.salary.employee
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

}
