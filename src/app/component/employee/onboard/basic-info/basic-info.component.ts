import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../../service/employee.service';
import { HrService } from '../../../../service/hr.service';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from "../../../hr-navbar/navbar.component";
import { BrandNavbarComponent } from "../../../manager/brand-navbar/brand-navbar.component";
import { HrBrandNavbarComponent } from "../../../hr-brand-navbar/hr-brand-navbar.component";

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NavbarComponent, BrandNavbarComponent, HrBrandNavbarComponent],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {
  name: any;
  contact: any;
  gender: any;
  dept: any;
  designation: any;
  dob: any;
  joiningdate: any;

  allGender: string[];
  allDepartment: string[];
  allDesignation: string[];

  successMsg:string='';
  msg:string='';

  constructor(private employeeService: EmployeeService, private hrService: HrService) {

    this.hrService.getGender().subscribe({
      next: (data) => {
        this.allGender = data;
      },
      error: (err) => {
        console.log("error in fetching genders1");
      }
    })

    this.hrService.getDepartment().subscribe({
      next: (data) => {
        this.allDepartment = data;
      },
      error: (err) => {
        console.log("error in fetching dept");
      }
     })
  
     this.hrService.getDesignation().subscribe({
      next: (data) => {
        this.allDesignation = data;
      },
      error: (err) => {
        console.log("error in fetching designations");
      }
     })

  }

  addEmployee(){
    const basicInfo = {
      name: this.name,
      gender: this.gender,
      contact: this.contact,
      department: this.dept,
      designation: this.designation,
      dateOfBirth: this.dob,
      dateOfJoining: this.joiningdate
    };
    this.employeeService.saveBasicInfo(basicInfo).subscribe({
          next: (employee) => {
            console.log(employee.dateOfBirth);
            console.log("Added employee");
            this.successMsg="Added employee successfully";
            this.msg="";
          },
          error: (err) => {
            console.log("Failed to add employee")
            this.successMsg="";
            this.msg="Employee addition not successful";
            console.error(err)
          }
        });
  }

  onChange() {
    this.employeeService.setBasicInfo(this.name, this.gender, this.contact, this.dept, this.designation, this.dob, this.joiningdate)
  }

}
