import { Component } from '@angular/core';
import { RecruitNavbarComponent } from "../recruit-navbar/recruit-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical-interview',
  standalone: true,
  imports: [RecruitNavbarComponent],
  templateUrl: './technical-interview.component.html',
  styleUrl: './technical-interview.component.css'
})
export class TechnicalInterviewComponent {

  constructor(private router:Router){}

  onScoreSheetClick() {
    this.router.navigateByUrl("/recruitment/technical-scoresheet");
  }

}
