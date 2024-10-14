import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brand-navbar.component.html',
  styleUrl: './brand-navbar.component.css'
})
export class BrandNavbarComponent {

  username:any=localStorage.getItem('username');

}
