import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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

  onLogout() {
    this.router.navigateByUrl("/logout")
  }

}
