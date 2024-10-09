import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hr-scoresheet',
  standalone: true,
  imports: [HrRecruitNavbarComponent, FormsModule],
  templateUrl: './hr-scoresheet.component.html',
  styleUrl: './hr-scoresheet.component.css'
})
export class HrScoresheetComponent {

  id:number=0;
  jobTitle:string='';
  communicationScore:number=0;
  attitudeScore:number=0;
  interpersonalScore:number=0;
  adaptabilityScore:number=0;
  scores:number[]=[1,2,3,4,5];

}
