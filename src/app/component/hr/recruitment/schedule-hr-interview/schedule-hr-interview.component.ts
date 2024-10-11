import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-hr-interview',
  standalone: true,
  imports: [HrRecruitNavbarComponent, FormsModule],
  templateUrl: './schedule-hr-interview.component.html',
  styleUrl: './schedule-hr-interview.component.css'
})
export class ScheduleHrInterviewComponent {

  interviewDate:string;
  interviewTime:string;
  interviewLink:string;

}
