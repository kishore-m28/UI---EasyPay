import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HrDashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-hr-recruit-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hr-recruit-navbar.component.html',
  styleUrl: './hr-recruit-navbar.component.css'
})
export class HrRecruitNavbarComponent {

  username:any=localStorage.getItem('username');
  
  constructor(private router:Router){}

  goToPayroll(){
    this.router.navigateByUrl("hr/dashboard");
  }

  onLogout() {
    this.router.navigateByUrl("/logout")
  }

}
