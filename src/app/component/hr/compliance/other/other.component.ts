import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../../hr-navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent,RouterLink],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {

}
