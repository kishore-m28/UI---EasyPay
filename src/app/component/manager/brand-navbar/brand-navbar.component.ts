import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brand-navbar.component.html',
  styleUrl: './brand-navbar.component.css'
})
export class BrandNavbarComponent {

  username:any=localStorage.getItem('username');

  constructor(private router:Router){}

  onClick() {
    this.router.navigateByUrl("/recruitment/technical-interview")
  }

  onLogOut() {
    this.router.navigateByUrl("/logout")
  }

}
