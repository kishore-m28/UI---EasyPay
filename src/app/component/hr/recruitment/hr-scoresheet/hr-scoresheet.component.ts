import { Component } from '@angular/core';
import { HrRecruitNavbarComponent } from "../hr-recruit-navbar/hr-recruit-navbar.component";
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from '../../../../service/hr.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hr-scoresheet',
  standalone: true,
  imports: [HrRecruitNavbarComponent, FormsModule, NgIf],
  templateUrl: './hr-scoresheet.component.html',
  styleUrl: './hr-scoresheet.component.css'
})
export class HrScoresheetComponent {

  id:any;
  attitudeScore:number;
  communicationScore:number;
  interpersonalScore:number;
  adaptabilityScore:number;

  successMsg:string=undefined;
  errorMsg:string=undefined;

  constructor(private router:Router, private actRoute:ActivatedRoute, private hrService:HrService){}

  ngOnInit(): void {
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

  onClick() {
    this.hrService.updateScoreSheet(this.id,{
      "attitudeScore":this.attitudeScore,
      "communicationScore":this.communicationScore,
      "interpersonalScore":this.interpersonalScore,
      "adaptabilityScore":this.adaptabilityScore
    }).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMsg="Scoresheet updated";
      },
      error:(err)=>{
        console.log(err);
        this.errorMsg=err.message;
      }
    })
    
  }


}
