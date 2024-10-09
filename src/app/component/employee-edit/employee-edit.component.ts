import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent,FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {

}
