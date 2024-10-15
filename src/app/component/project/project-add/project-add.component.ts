import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../../service/project.service';
import { NgFor, NgIf } from '@angular/common';
import { ManagerService } from '../../../service/manager.service';

@Component({
  selector: 'app-project-add',
  standalone: true,
  imports: [RouterLink, HrBrandNavbarComponent, NavbarComponent, FormsModule, NgFor, NgIf],
  templateUrl: './project-add.component.html',
  styleUrl: './project-add.component.css'
})
export class ProjectAddComponent implements OnInit {

  projectType: any[] = [];

  managers: any[] = [];

  title: string = '';
  description: string = '';
  type: string = '';
  startDate: string = '';
  endDate: string = "";
  selectedManagerId: any;
  successMsg: string = null;
  errorMsg: string = null;



  constructor(private projectService: ProjectService, private managerService: ManagerService) { }

  ngOnInit(): void {

    this.projectService.getProjectType().subscribe({
      next: (data) => {
        this.projectType = data;
      },
      error: () => {
        console.log("error in displaying project types")
      }
    })

    this.managerService.getAllManagers().subscribe({
      next: (res) => {
        this.managers = res;
        console.log(this.managers);
      },
      error: () => {
        console.log("error in displaying managers")
      }
    })
  }

  addProject() {
    if (this.selectedManagerId) {
      this.projectService.addProject({
        name: this.title,
        projectDescription: this.description,
        projectType: this.type,
        startDate: this.startDate,
        estimatedEndDate: this.endDate
      }, this.selectedManagerId).subscribe({
        next: () => {
          console.log(this.title);
          this.successMsg="Project added successfully";
          this.errorMsg=null;
          console.log('Project added successfully');
        },
        error: () => {
          this.errorMsg="Error adding project";
          this.successMsg=null;
          console.log('Error adding project');
        }
      });
    } else {
      console.log('Please select a manager');
    }
  }
}
