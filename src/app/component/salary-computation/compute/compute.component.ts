import { Component, OnInit } from '@angular/core';
import { SalaryBrandNavbarComponent } from "../salary-brand-navbar/salary-brand-navbar.component";
import { SalaryNavbarComponent } from "../salary-navbar/salary-navbar.component";
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { salaryComputeService } from '../../../service/salaryCompute.service';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [SalaryBrandNavbarComponent, SalaryNavbarComponent, HrBrandNavbarComponent, NavbarComponent],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.css'
})
export class ComputeComponent implements OnInit{

  id:any;
  salary:any
  employee:any

  constructor(private router:Router
    ,private activatedRoute:ActivatedRoute
    ,private salaryComputeService:salaryComputeService){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.salaryComputeService.computeSalary(this.id)
    .subscribe({
      next:(data)=>{
        this.salary=data
        this.employee=this.salary.employee;
      },
      error:(err)=>{console.log(err.message)}
    })
  }

  onSave(id:any){
    this.salaryComputeService.salaryToPending(id)
    .subscribe({
      next:(data)=>{console.log(data)},
      error:(err)=>{console.log(err.message)}
    })
    this.router.navigateByUrl('run-payroll');
  }

}
