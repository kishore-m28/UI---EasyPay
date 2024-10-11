import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { ProjectListComponent } from "../../project/project-list/project-list.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
