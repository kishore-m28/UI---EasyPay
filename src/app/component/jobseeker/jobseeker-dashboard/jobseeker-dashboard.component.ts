import { Component } from '@angular/core';
import { JobseekerNavbarComponent } from "../jobseeker-navbar/jobseeker-navbar.component";

@Component({
  selector: 'app-jobseeker-dashboard',
  standalone: true,
  imports: [JobseekerNavbarComponent],
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrl: './jobseeker-dashboard.component.css'
})
export class JobseekerDashboardComponent {
  username:any=localStorage.getItem('username');

}
