import { Component } from '@angular/core';
import { RecruitNavbarComponent } from "../recruit-navbar/recruit-navbar.component";

@Component({
  selector: 'app-recruit-dashboard',
  standalone: true,
  imports: [RecruitNavbarComponent],
  templateUrl: './recruit-dashboard.component.html',
  styleUrl: './recruit-dashboard.component.css'
})
export class RecruitDashboardComponent {

}
