import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../../hr-navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent,RouterLink,FormsModule],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css'
})
export class BonusComponent {

  basePay:any;
  minimunWorkDuration : any;
  bonusPercenatge : any;
}
