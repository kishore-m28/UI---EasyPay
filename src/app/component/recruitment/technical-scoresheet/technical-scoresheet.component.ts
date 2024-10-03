import { Component } from '@angular/core';
import { RecruitmentNavbarComponent } from "../../recruitment-navbar/recruitment-navbar.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical-scoresheet',
  standalone: true,
  imports: [RecruitmentNavbarComponent, NgFor, FormsModule],
  templateUrl: './technical-scoresheet.component.html',
  styleUrl: './technical-scoresheet.component.css'
})
export class TechnicalScoresheetComponent {

  id:number=0;
  jobTitle:string='';
  problemSolvingScore:number=0;
  communicationScore:number=0;
  codingSkillScore:number=0;
  technicalKnowledgeScore:number=0;
  scores:number[]=[1,2,3,4,5];


}
