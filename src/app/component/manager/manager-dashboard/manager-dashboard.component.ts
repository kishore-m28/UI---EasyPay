import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [HrBrandNavbarComponent, ManagerNavbarComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {

}
