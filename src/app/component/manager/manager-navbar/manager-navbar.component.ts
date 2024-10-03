import { Component } from '@angular/core';
import { HrDashboardComponent } from "../../hr/dashboard/dashboard.component";
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { BrandNavbarComponent } from "../brand-navbar/brand-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manager-navbar',
  standalone: true,
  imports: [HrDashboardComponent, HrBrandNavbarComponent, BrandNavbarComponent, RouterLink],
  templateUrl: './manager-navbar.component.html',
  styleUrl: './manager-navbar.component.css'
})
export class ManagerNavbarComponent {

}
