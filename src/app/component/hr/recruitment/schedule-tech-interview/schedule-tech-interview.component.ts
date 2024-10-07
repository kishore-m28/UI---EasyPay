import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";

@Component({
  selector: 'app-schedule-tech-interview',
  standalone: true,
  imports: [FormsModule, HrRecruitNavbarComponent],
  templateUrl: './schedule-tech-interview.component.html',
  styleUrl: './schedule-tech-interview.component.css'
})
export class ScheduleTechInterviewComponent {

  interviewerName:string;
  interviewDate:string;
  interviewTime:string;
  interviewLink:string;

}
