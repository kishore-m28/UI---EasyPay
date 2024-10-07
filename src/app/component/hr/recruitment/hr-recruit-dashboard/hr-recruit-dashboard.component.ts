import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";

@Component({
  selector: 'app-hr-recruit-dashboard',
  standalone: true,
  imports: [HrRecruitNavbarComponent],
  templateUrl: './hr-recruit-dashboard.component.html',
  styleUrl: './hr-recruit-dashboard.component.css'
})
export class HrRecruitDashboardComponent {

}
