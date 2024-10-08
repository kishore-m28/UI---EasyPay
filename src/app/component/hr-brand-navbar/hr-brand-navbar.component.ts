import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-brand-navbar',
  standalone: true,
  imports: [],
  templateUrl: './hr-brand-navbar.component.html',
  styleUrl: './hr-brand-navbar.component.css'
})
export class HrBrandNavbarComponent {

  username:any;

  constructor(private router : Router){
    this.username = window.localStorage.getItem('username');
  }

  onLogout(){
    this.router.navigateByUrl('/logout');
  }
}
