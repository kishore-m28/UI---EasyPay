import { Component } from '@angular/core';
import { HrService } from '../../../service/hr.service';
import { ProjectService } from '../../../service/project.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";

@Component({
  selector: 'app-completed-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, BrandNavbarComponent, NavbarComponent, HrBrandNavbarComponent],
  templateUrl: './completed-list.component.html',
  styleUrl: './completed-list.component.css'
})
export class CompletedListComponent {

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
    this.hrservice.getCompletedProjects(this.page, this.size).subscribe({
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
