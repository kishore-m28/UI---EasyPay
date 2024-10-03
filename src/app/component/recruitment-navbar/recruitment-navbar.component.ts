import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recruitment-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recruitment-navbar.component.html',
  styleUrl: './recruitment-navbar.component.css'
})
export class RecruitmentNavbarComponent {

  constructor(private router:Router){}

}
