import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";

@Component({
  selector: 'app-review-payroll',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent],
  templateUrl: './review-payroll.component.html',
  styleUrl: './review-payroll.component.css'
})
export class ReviewPayrollComponent {

}
