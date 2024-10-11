import { Component } from '@angular/core';
import { HrBrandNavbarComponent } from "../../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../../hr-navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-gratuity',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent,RouterLink,FormsModule,ChartModule],
  templateUrl: './gratuity.component.html',
  styleUrl: './gratuity.component.css'
})
export class GratuityComponent {

  gratuityFactory:any;
  minYearsOfExperience:any;
}
