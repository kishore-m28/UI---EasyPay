import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-interview',
  standalone: true,
  imports: [HrRecruitNavbarComponent],
  templateUrl: './schedule-interview.component.html',
  styleUrl: './schedule-interview.component.css'
})
export class ScheduleInterviewComponent {

  constructor(private router:Router){}

  
  onTechInterview() {
    this.router.navigateByUrl("/recruitment/schedule-tech-interview");
  }
  onHrInterview() {
    this.router.navigateByUrl("/recruitment/schedule-hr-interview");
  }

}
