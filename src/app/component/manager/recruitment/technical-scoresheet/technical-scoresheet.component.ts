import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecruitNavbarComponent } from "../recruit-navbar/recruit-navbar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../../../../service/manager.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-technical-scoresheet',
  standalone: true,
  imports: [FormsModule, RecruitNavbarComponent, NgIf],
  templateUrl: './technical-scoresheet.component.html',
  styleUrl: './technical-scoresheet.component.css'
})
export class TechnicalScoresheetComponent implements OnInit{

  id:any;
  problemSolvingScore:number;
  communicationScore:number;
  codingSkillScore:number;
  technicalKnowledgeScore:number;

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private router:Router, private actRoute:ActivatedRoute, private managerService:ManagerService){}

  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

  onClick() {
    this.managerService.updateScoreSheet(this.id,{
      "technicalKnowledgeScore":this.technicalKnowledgeScore,
      "problemSolvingScore":this.problemSolvingScore,
      "codingSkillScore":this.codingSkillScore,
      "communicationScore":this.communicationScore
    }).subscribe({
      next:(data)=>{
          console.log(data);
          this.successMsg="Scoresheet updated"
      },
      error:(err)=>{
        console.log(err);
        this.errorMsg=err.message;
      }
    })
  }




}
