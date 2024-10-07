import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { BrandNavbarComponent } from "../brand-navbar/brand-navbar.component";

@Component({
  selector: 'app-manager-mainpage',
  standalone: true,
  imports: [RouterLink, ManagerNavbarComponent, BrandNavbarComponent],
  templateUrl: './manager-mainpage.component.html',
  styleUrl: './manager-mainpage.component.css'
})
export class ManagerMainpageComponent {

  constructor(private router:Router){}

  OnDashboardClick() {
    this.router.navigateByUrl("/manager/dashboard");
  }
  OnRecruitClick() {
    this.router.navigateByUrl("/recruitment/dashboard")
  }

}
