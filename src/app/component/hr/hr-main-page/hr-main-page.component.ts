import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-main-page',
  standalone: true,
  imports: [BrandNavbarComponent],
  templateUrl: './hr-main-page.component.html',
  styleUrl: './hr-main-page.component.css'
})
export class HrMainPageComponent {

  constructor(private router:Router){}

  OnDashboardClick() {
    this.router.navigateByUrl("/hr/dashboard");
  }
  OnRecruitClick() {
    this.router.navigateByUrl("/hr/dashboard/recruitment/jobs-list")
  }

}
