import { Component } from '@angular/core';
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { RouterLink } from '@angular/router';
import { GratuityComponent } from "../compliance/gratuity/gratuity.component";

@Component({
  selector: 'app-detailed-compliance',
  standalone: true,
  imports: [NavbarComponent, HrBrandNavbarComponent, RouterLink, GratuityComponent],
  templateUrl: './detailed-compliance.component.html',
  styleUrl: './detailed-compliance.component.css'
})
export class DetailedComplianceComponent {

}
