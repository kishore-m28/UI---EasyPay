import { Component } from '@angular/core';
import { NavbarComponent } from '../../hr-navbar/navbar.component';
import { HrBrandNavbarComponent } from '../../hr-brand-navbar/hr-brand-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [NavbarComponent,HrBrandNavbarComponent,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class HrDashboardComponent {

}
