import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/hr-navbar/navbar.component";
import { HrBrandNavbarComponent } from "./component/hr-brand-navbar/hr-brand-navbar.component";
import { HrDashboardComponent } from "./component/hr/dashboard/dashboard.component";
import { LoginComponent } from './component/auth/login/login.component';
import { RecruitmentNavbarComponent } from "./component/recruitment-navbar/recruitment-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HrBrandNavbarComponent, HrDashboardComponent,
    RouterOutlet, LoginComponent, RecruitmentNavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-pay-app';

}
