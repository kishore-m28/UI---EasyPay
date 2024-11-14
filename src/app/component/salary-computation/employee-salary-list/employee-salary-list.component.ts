import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { Router } from '@angular/router';
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { salaryComputeService } from '../../../service/salaryCompute.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";

@Component({
  selector: 'app-employee-salary-list',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent, FormsModule, NgFor, NgIf, HrBrandNavbarComponent],
  templateUrl: './employee-salary-list.component.html',
  styleUrl: './employee-salary-list.component.css'
})
export class EmployeeSalaryListComponent {

  department:string='';
  designation:string='';
  city:string='';

  departments:any[]=[]
  designations:any[]=[]
  cities:any[]=[]

  employee:any[]=[]
  show: boolean = true;
 

  constructor(private router:Router,private salaryComputeService:salaryComputeService){

    // Restore filter values and employee list from the service
    const storedFilter = this.salaryComputeService.getEmployeeFilter();
    this.department = storedFilter.department;
    this.designation = storedFilter.designation;
    this.city = storedFilter.city;
 
    this.employee = this.salaryComputeService.getEmployeeList();
    
     this.salaryComputeService.getDepartment()
     .subscribe({
      next:(data)=>this.departments=data
     })

     this.salaryComputeService.getDesignation()
     .subscribe({
      next:(data)=>{this.designations=data;
      }
     })

     this.salaryComputeService.getCity()
     .subscribe({
      next:(data)=>this.cities=data
     })
  }

  fetch(){
    // Save the current filter values in the service
    const filter = {
      department: this.department,
      designation: this.designation,
      city: this.city
    };
    this.salaryComputeService.setEmployeeFilter(filter);
    this.salaryComputeService.getEmployeeFilterDetails(filter)
    .subscribe({
      next:(data)=>{
        this.employee=data;
        this.salaryComputeService.setEmployeeList(data);
        console.log(data)
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  onCompute(id:any){
    this.router.navigateByUrl('/salary/compute/'+id);
    let computedIds = this.salaryComputeService.getComputedEmployeeIds();
    computedIds.push(id);

    // Save the updated list back to the service
    this.salaryComputeService.setComputedEmployeeIds(computedIds);
    this.show=false;
  }

  isComputed(id: number): boolean {
    //Check if employee ID exists in the computed list from the service
    return this.salaryComputeService.getComputedEmployeeIds().includes(id);
  }

  onReview(){
    this.router.navigateByUrl('/payroll/review')
  }

}
