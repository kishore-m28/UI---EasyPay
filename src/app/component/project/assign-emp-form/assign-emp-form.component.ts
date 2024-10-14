import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { SummarySelectedEmpComponent } from "../summary-selected-emp/summary-selected-emp.component";

@Component({
  selector: 'app-assign-emp-form',
  standalone: true,
  imports: [BrandNavbarComponent, NavbarComponent, FormsModule, SummarySelectedEmpComponent],
  templateUrl: './assign-emp-form.component.html',
  styleUrl: './assign-emp-form.component.css'
})
export class AssignEmpFormComponent {

  pid: any;
  employees: any[];

  constructor(private route: ActivatedRoute) {
    this.pid = route.snapshot.paramMap.get('id');
  }

}
