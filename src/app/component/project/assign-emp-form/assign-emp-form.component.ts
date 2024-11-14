import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { SummarySelectedEmpComponent } from "../summary-selected-emp/summary-selected-emp.component";
import { ProjectService } from '../../../service/project.service';
import { HrService } from '../../../service/hr.service';
import { NgFor, NgIf } from '@angular/common';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-assign-emp-form',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent, FormsModule, SummarySelectedEmpComponent, NgFor, NgIf, Router],
  templateUrl: './assign-emp-form.component.html',
  styleUrl: './assign-emp-form.component.css'
})
export class AssignEmpFormComponent implements OnInit {

  pid: any;
  employees: number[] = [];

  title: string = '';
  manager: any;
  username: any;

  allEmployeeIds: any[];
  allEmployees: { id: number, name: string }[] = [];

  assignedEmployees: any[] = [];

  msg: string = null;

  emptyMsg: boolean = false;

  successMsg: string = null;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private hrService: HrService, private router: Router) {
    this.pid = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.projectService.getProjectById(this.pid).subscribe({
      next: (data) => {
        this.title = data.name;
        this.manager = data.manager.name;
        this.username = data.manager.user.username;

        this.projectService.getAllEmployeesByTitle(this.title).subscribe({
          next: (data) => {
            console.log("Username:" + this.username);
            console.log("Response data from API:", data);
            this.assignedEmployees = data;

            if (this.assignedEmployees.length === 0) {
              this.emptyMsg = true;
            }
            console.log("Already working employees:" + this.assignedEmployees);

            this.hrService.getAllEmployees(0, 1000).subscribe({
              next: (data) => {
                console.log("entered next step of sub");
                this.allEmployees = data.content.map((employee: any) => ({
                  id: employee.id,
                  name: employee.name
                })).filter((employee: any) =>
                  !this.assignedEmployees.some((assigned) => assigned.id === employee.id)
                );
                console.log("Employee Ids: " + this.allEmployeeIds);
                console.log("Employees: " + this.allEmployees);
              },
              error: (err) => {
                console.log("error in getting all employees");
              }
            });
          },
          error: (err) => {
            console.log("error in getting assigned employees");
          }
        });


      },
      error: () => {

      }
    })

    this.projectService.assignedEmployees$.subscribe(employees => {
      this.assignedEmployees = employees;
    });
  }

  assignEmployees() {
    if (this.employees.length === 0) {
      this.msg = "Select employee(s)";
      this.successMsg="";
    }else{
      this.msg="";
      const assignEmployeeData = {
        projectId: this.pid,
        employeeIds: this.employees,
        assignedDate: new Date()
      };
  
      console.log(this.pid);
      console.log(this.employees);
  
      this.projectService.assignEmployees(assignEmployeeData).subscribe({
        next: (data) => {
          console.log(data);
          console.log("assigned successfully")
          this.successMsg = "Assigned successfully";
        },
        error: () => {
          console.log();
        }
      })
    }
  }


}

