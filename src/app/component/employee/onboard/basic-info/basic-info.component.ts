import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../../service/employee.service';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [FormsModule],
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

constructor(private employeeService : EmployeeService){}

// saveBasicInfo() {
//   this.employeeService.saveBasicInfo(this.basicInfo).subscribe({
//     next: (employee) => {
//       this.employeeId = employee.id; // Use this employee ID for the next steps
//       this.goToNextStep(); // Proceed to the next step in the stepper
//     },
//     error: (err) => console.error(err)
//   });
// }

onChange(){
  this.employeeService.setBasicInfo(this.name,this.gender,this.contact,this.dept,this.designation,this.dob,this.joiningdate)
}

}
