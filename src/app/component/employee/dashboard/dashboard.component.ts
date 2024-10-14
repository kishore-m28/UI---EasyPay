import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { EmpNavbarComponent } from "../emp-navbar/emp-navbar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent, EmpNavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username:any=localStorage.getItem('username');

}
