import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hr-brand-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hr-brand-navbar.component.html',
  styleUrl: './hr-brand-navbar.component.css'
})
export class HrBrandNavbarComponent {

  username:any=localStorage.getItem('username');

  constructor(private router : Router){
    this.username = window.localStorage.getItem('username');
  }

  onLogout(){
    this.router.navigateByUrl('/logout');
  }
}
