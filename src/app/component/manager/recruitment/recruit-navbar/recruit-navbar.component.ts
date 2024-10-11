import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recruit-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recruit-navbar.component.html',
  styleUrl: './recruit-navbar.component.css'
})
export class RecruitNavbarComponent {

  username:any=localStorage.getItem('username');
  
  constructor(private router:Router){}

  onLogout() {
    this.router.navigateByUrl("/logout")
  }

}
