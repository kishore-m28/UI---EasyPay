import { Component } from '@angular/core';
import { SalaryBrandNavbarComponent } from "../salary-brand-navbar/salary-brand-navbar.component";
import { SalaryNavbarComponent } from "../salary-navbar/salary-navbar.component";
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [SalaryBrandNavbarComponent, SalaryNavbarComponent, HrBrandNavbarComponent, NavbarComponent],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.css'
})
export class ComputeComponent {

  constructor(private router:Router){}

  onSave(){
    this.router.navigateByUrl('run-payroll');
  }

}
