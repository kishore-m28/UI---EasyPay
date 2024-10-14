import { Component, OnInit } from '@angular/core';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { EmpNavbarComponent } from "../emp-navbar/emp-navbar.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-emp-leave',
  standalone: true,
  imports: [BrandNavbarComponent, EmpNavbarComponent],
  templateUrl: './emp-leave.component.html',
  styleUrl: './emp-leave.component.css'
})
export class EmpLeaveComponent implements OnInit {

  todaydate:any;

  constructor(private datePipe : DatePipe){}

  ngOnInit(): void {
    const today = new Date();
    this.todaydate=this.datePipe.transform(today,"yyyy-MM-dd");
    console.log(this.todaydate);
  }
}
