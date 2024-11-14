import { Component, OnInit } from '@angular/core';
import { HrBrandNavbarComponent } from "../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HrService } from '../../service/hr.service';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent, FormsModule, NgIf, RouterLink, NgFor],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {

  successMsg: string = '';
  msg: string = '';

  empId: any;

  allGender: string[];
  allDepartment: string[];
  allDesignation: string[];

  name: any;
  gender: any;
  contact: any;
  department: any;
  designation: any;
  dateOfBirth: any;
  dateOfJoining: any;


  constructor(private actRoute: ActivatedRoute, private hrService: HrService) {
    this.empId = actRoute.snapshot.paramMap.get('id');
    console.log("Emp Id: " + this.empId);
  }

  ngOnInit(): void {

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

    this.hrService.getEmployeeDetailsById(this.empId).subscribe({
      next: (data) => {
        this.name = data.name;
        this.gender = data.gender;
        this.contact = data.contact;
        this.department = data.department;
        this.designation = data.designation;
        this.dateOfBirth = data.dateOfBirth;
        this.dateOfJoining = data.dateOfJoining;
      },
      error: () => {
        console.log("Error fetching emp details")
      }
    });

  }

  updateInfo() {
    this.hrService.updateInfo(this.empId, {
      "id": this.empId,
      "name": this.name,
      "gender": this.gender,
      "contact": this.contact,
      "department": this.department,
      "designation": this.designation,
      "dateOfBirth": this.dateOfBirth,
      "dateOfJoining": this.dateOfJoining
    })
      .subscribe({
        next: (data) => {
          console.log("Updated")
          this.successMsg = "Updated Employee Info Successfully"
        },
        error: (err) => {
          console.log("error in updating")
          this.msg="Unable to update employee info"
        }
      })
  }
}
