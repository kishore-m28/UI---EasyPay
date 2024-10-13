import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-add',
  standalone: true,
  imports: [RouterLink, HrBrandNavbarComponent, NavbarComponent,FormsModule],
  templateUrl: './project-add.component.html',
  styleUrl: './project-add.component.css'
})
export class ProjectAddComponent {

}
