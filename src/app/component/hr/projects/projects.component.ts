import { Component, OnInit } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { ProjectListComponent } from "../../project/project-list/project-list.component";
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent, ProjectListComponent,RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

activeCount: number;
completedCount : number;
upcomingCount : number;
overdueCount : number;

constructor(private projectService : ProjectService){}

ngOnInit(): void {
  this.projectService.getActiveCount().subscribe({
    next: (data)=>{
      this.activeCount=data;
    },
    error: () => {
      console.log("error in getting active-count");
    }
  })

  this.projectService.getCompletedCount().subscribe({
    next: (data)=>{
      this.completedCount=data;
    },
    error: () => {
      console.log("error in getting active-count");
    }
  })

  this.projectService.getUpcomingCount().subscribe({
    next: (data)=>{
      this.upcomingCount=data;
    },
    error: () => {
      console.log("error in getting active-count");
    }
  })

  this.projectService.getOverdueCount().subscribe({
    next: (data)=>{
      this.overdueCount=data;
    },
    error: () => {
      console.log("error in getting active-count");
    }
  })
}

}
