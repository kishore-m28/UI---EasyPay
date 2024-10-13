import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../service/hr.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary-selected-emp',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './summary-selected-emp.component.html',
  styleUrl: './summary-selected-emp.component.css'
})
export class SummarySelectedEmpComponent implements OnInit {

  employees: any[] = [1,2];
  constructor(private hrService: HrService) { }

  ngOnInit(): void {
    this.hrService.empList$.subscribe(empList => {
      this.employees=empList;
    })
  }



}
