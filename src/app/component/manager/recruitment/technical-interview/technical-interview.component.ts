import { Component } from '@angular/core';
import { RecruitNavbarComponent } from "../recruit-navbar/recruit-navbar.component";

@Component({
  selector: 'app-technical-interview',
  standalone: true,
  imports: [RecruitNavbarComponent],
  templateUrl: './technical-interview.component.html',
  styleUrl: './technical-interview.component.css'
})
export class TechnicalInterviewComponent {

}
