import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-interview',
  standalone: true,
  imports: [HrRecruitNavbarComponent],
  templateUrl: './hr-interview.component.html',
  styleUrl: './hr-interview.component.css'
})
export class HrInterviewComponent {

  constructor(private router:Router){}

  OnScoreSheetClick() {
    this.router.navigateByUrl("/recruitment/hr-scoresheet");
  }

}
