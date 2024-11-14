import { Component, OnInit } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { BasicInfoComponent } from "../onboard/basic-info/basic-info.component";
import { AddressComponent } from "../onboard/address/address.component";
import { BankDetailsComponent } from "../onboard/bank-details/bank-details.component";
import { UserDetailsComponent } from "../onboard/user-details/user-details.component";
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [NgIf,HrBrandNavbarComponent, NavbarComponent, StepperModule, ButtonModule, BasicInfoComponent, AddressComponent, BankDetailsComponent, UserDetailsComponent,FormsModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent implements OnInit{
  name: string;
  gender: string;
  contact: string;
  dept: string;
  designation: string;
  dob: string;
  joiningdate: string;
  employeeId: any;

  savedbasic: boolean = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {}

  ngOnInit() {

    this.employeeService.basicInfo$.subscribe( emp=>{
      this.name = emp.name;
      this.gender = emp.gender;
      this.contact = emp.contact;
      this.dept = emp.dept;
      this.designation = emp.designation;
      this.dob = emp.dob;
      this.joiningdate = emp.joiningdate;
   } )

}

  //Step 1: Submit basic info
  saveBasicInfo() {
    console.log("saving through div click")
    const basicInfo = {
      name: this.name,
      gender: this.gender,
      contact: this.contact,
      dept: this.dept,
      designation: this.designation,
      dob: this.dob,
      joiningdate: this.joiningdate
    };
    this.employeeService.saveBasicInfo(basicInfo).subscribe({
      next: (data) => {
        this.employeeId = data.id;
        this.savedbasic=true;
        console.log('Basic Info saved:', data);
      },
      error: (err) => {
        console.error('Error saving basic info:', err);
      }
    }
      
    );
  }
  onChange(){
    this.employeeService.setBasicInfo(this.name,this.gender,this.contact,this.dept,this.designation,this.dob,this.joiningdate)
  }

}
