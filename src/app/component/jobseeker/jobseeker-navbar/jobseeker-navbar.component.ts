import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobseeker-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jobseeker-navbar.component.html',
  styleUrl: './jobseeker-navbar.component.css'
})
export class JobseekerNavbarComponent {

  username:any=localStorage.getItem('username');
  constructor(private router:Router){}

  onLogout(){
    this.router.navigateByUrl("");
  }

}
