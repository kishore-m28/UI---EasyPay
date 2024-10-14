import { Component } from '@angular/core';
import { NavbarComponent } from '../../hr-navbar/navbar.component';
import { HrBrandNavbarComponent } from '../../hr-brand-navbar/hr-brand-navbar.component';
import { RouterLink } from '@angular/router';
import { GenderChartComponent } from "../gender-chart/gender-chart.component";

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [NavbarComponent, HrBrandNavbarComponent, RouterLink, GenderChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class HrDashboardComponent {

}
