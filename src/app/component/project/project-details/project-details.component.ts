import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HrService } from '../../../service/hr.service';
import { NgFor, NgIf } from '@angular/common';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgFor, RouterLink, BrandNavbarComponent, NavbarComponent,NgIf],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {

  pid: any;
  project: any;
  assignedEmployees: any[] = [];

  constructor(private actRoute: ActivatedRoute, private hrService: HrService) { }

  ngOnInit(): void {
    this.pid = this.actRoute.snapshot.paramMap.get('id');

    this.hrService.getProjectById(this.pid).subscribe({
      next: (data) => {
        this.project = data;
        // this.assignedEmployees = data.assignedEmployees;
      },
      error: () => {
        console.log();
      }
    });

  }
}
