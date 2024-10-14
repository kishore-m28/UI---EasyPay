import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { Router } from '@angular/router';
import { salaryComputeService } from '../../../service/salaryCompute.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-review-payroll',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent,NgFor],
  templateUrl: './review-payroll.component.html',
  styleUrl: './review-payroll.component.css'
})
export class ReviewPayrollComponent {

  department:string='';
  designation:string='';
  city:string='';

  salary:any[]=[]
  selectedEmployeeIds: number[] = [];

  constructor(private router:Router,private salaryComputeService:salaryComputeService){
    const storedFilter = this.salaryComputeService.getEmployeeFilter();
    this.department = storedFilter.department;
    this.designation = storedFilter.designation;
    this.city = storedFilter.city;
    this.fetch();
  }
  
  fetch(){
    const filter = {
      department: this.department,
      designation: this.designation,
      city: this.city
    };
    this.salaryComputeService.setEmployeeFilter(filter);
    this.salaryComputeService.getReviewPayrollDetails(filter)
    .subscribe({
      next:(data)=>{
        this.salary=data;
        console.log(data);
        console.log('in review payroll')
      },
      error:(err)=>{
        console.log(err.message);
      }
    })
  }

  toggleSelection(id: number) {
    const index = this.selectedEmployeeIds.indexOf(id);
    if (index === -1) {
      this.selectedEmployeeIds.push(id); // Add if not already selected
      console.log(this.selectedEmployeeIds)
    } else {
      this.selectedEmployeeIds.splice(index, 1); // Remove if already selected
      console.log(this.selectedEmployeeIds)
    }
  }

  onRunPayroll(){
    if (this.selectedEmployeeIds.length === 0) {
      alert('Please select at least one employee.');
      return;
    }

    this.salaryComputeService.processPayroll(this.selectedEmployeeIds)
    .subscribe({
      next:(data)=>{
        this.fetch();
        alert('Payroll processed successfully!');
        console.log('in payroll process')
      },
      error:(err)=>{
        console.log(err.message)
      }
    })

  }

  onGoToRunPayroll(){
    this.router.navigateByUrl('run-payroll')
  }

}
