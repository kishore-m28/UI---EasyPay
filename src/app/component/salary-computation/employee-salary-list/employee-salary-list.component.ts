import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { Router } from '@angular/router';
import { NavbarComponent } from "../../hr-navbar/navbar.component";

@Component({
  selector: 'app-employee-salary-list',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent],
  templateUrl: './employee-salary-list.component.html',
  styleUrl: './employee-salary-list.component.css'
})
export class EmployeeSalaryListComponent {

  constructor(private router:Router){}

  onCompute(){
    this.router.navigateByUrl('/salary/compute')
  }

  onReview(){
    this.router.navigateByUrl('/payroll/review')
  }

}
