import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { Router } from '@angular/router';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";

@Component({
  selector: 'app-hr-main-page',
  standalone: true,
  imports: [BrandNavbarComponent, HrBrandNavbarComponent],
  templateUrl: './hr-main-page.component.html',
  styleUrl: './hr-main-page.component.css'
})
export class HrMainPageComponent {

  constructor(private router:Router){}

  OnDashboardClick() {
    this.router.navigateByUrl("/hr/dashboard");
  }
  OnRecruitClick() {
    this.router.navigateByUrl("/recruitment/jobs-list")
  }

}
