import { Component } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { EmpNavbarComponent } from "../emp-navbar/emp-navbar.component";

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent, FormsModule, EmpNavbarComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {

}
