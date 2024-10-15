import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { HrService } from '../../../service/hr.service';
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent, NgFor,RouterLink, NgIf],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
assignEmployees(arg0: any) {
throw new Error('Method not implemented.');
}

  projects: any[]=[];

  totalPages: number = 0;
  numArry: number[] = [];
  counter: number = 0;
  page: number = 0;
  size: number = 5;
  last: boolean = false;
  first: boolean = true;

  constructor(private hrservice: HrService, private projectService : ProjectService,private router: Router) {
    this.fetchData();

    console.log(this.numArry)
  }

  fetchData() {
    this.hrservice.getAllProjects(this.page, this.size).subscribe({
      next: (data) => {
        this.projects = data.content;
        this.totalPages = data.totalPages;
        this.last = data.last;
        this.first = data.first;
        console.log(this.projects);

        if (this.counter === 0) {
          let i = 0;
          while (i < this.totalPages) {
            this.numArry.push(i); //0 1 
            i++; //1 2
          };
        }

        this.counter = this.counter + 1;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onPageNumberClick(n:number){
   
    this.page = n; 
    this.fetchData();
   }
   onNext(){
    this.page = this.page + 1; 
    this.fetchData();
    
   }
   onPrev(){
    this.page = this.page - 1;
    this.fetchData();
   }

   
   markOngoing(pid: any) {
    this.projectService.updateProjectStatus(pid, 'IN_PROGRESS').subscribe({
      next: () => {
        console.log("updated status successfully")
        // If the update is successful, remove the project from the displayed list
        this.fetchData();
        // this.projects = this.projects.filter(p => p.id !== pid);
      },
      error: (err) => {
        console.error('Error updating project status:', err);
      }
    });
  }

  markCompleted(pid : number){
    this.projectService.updateProjectStatus(pid, 'COMPLETED').subscribe({
      next: () => {
        console.log("updated status successfully")
        // If the update is successful, remove the project from the displayed list
        this.fetchData();
        // this.projects = this.projects.filter(p => p.id !== pid);
      },
      error: (err) => {
        console.error('Error updating project status:', err);
      }
    });
  }

  delete(id: number) {
    this.hrservice.updateInactive(id).subscribe({
      next: () => {
        console.log('about to fetch data');
        if (this.last = true) {
          this.page--;
          this.counter--;
        }
        this.fetchData();
      },

      error: (err) => {
        console.log(err);
      }
    })
  }
}
