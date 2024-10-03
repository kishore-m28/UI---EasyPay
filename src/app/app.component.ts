import { Component } from '@angular/core';
import { LoginComponent } from './component/auth/login/login.component';
import { RouterOutlet } from '@angular/router';
import { RecruitmentNavbarComponent } from "./component/recruitment-navbar/recruitment-navbar.component";
import { TechnicalScoresheetComponent } from "./component/recruitment/technical-scoresheet/technical-scoresheet.component";
import { HrScoresheetComponent } from "./component/recruitment/hr-scoresheet/hr-scoresheet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RecruitmentNavbarComponent, TechnicalScoresheetComponent, HrScoresheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
} 
