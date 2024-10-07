import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecruitNavbarComponent } from "../recruit-navbar/recruit-navbar.component";

@Component({
  selector: 'app-technical-scoresheet',
  standalone: true,
  imports: [FormsModule, RecruitNavbarComponent],
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
