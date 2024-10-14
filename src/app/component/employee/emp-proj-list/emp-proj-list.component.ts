import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/project.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-emp-proj-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './emp-proj-list.component.html',
  styleUrl: './emp-proj-list.component.css'
})
export class EmpProjListComponent implements OnInit{

  projects:any[]=[];

  constructor(private projectService:ProjectService){
    this.projectService.getProjectByEmployeeId(2);
  }

  ngOnInit(): void {
    console.log(this.projects);
  }

}
