import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  email : string = "easypay.admin@gmail.com";
  
constructor(private router : Router){
  localStorage.clear();
}

  login(){
    this.router.navigateByUrl('/'); 
  }
}
