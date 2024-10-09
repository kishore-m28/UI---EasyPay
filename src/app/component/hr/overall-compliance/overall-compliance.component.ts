import { Component, OnInit } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../../hr-navbar/navbar.component";
import { HrService } from '../../../service/hr.service';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-overall-compliance',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent, RouterModule, ChartModule],
  templateUrl: './overall-compliance.component.html',
  styleUrl: './overall-compliance.component.css'
})
export class OverallComplianceComponent implements OnInit {

  totalActiveEmployees: any;

  minimumWageCompliance: any;

  aptData: any;
  barOptions: any;

  constructor(private hrService: HrService) { }

  ngOnInit(): void {

    this.hrService.getCountOfEmployees().subscribe({
      next: (data) => {
        this.totalActiveEmployees = data;
        console.log(this.totalActiveEmployees);
      },

      error: (err) => {
        console.log(err);
      }
    })

    this.hrService.getMinimumWageCompliance().subscribe({
      next: (data) => {
        this.minimumWageCompliance = data;
        console.log(this.minimumWageCompliance);
      },

      error: (err) => {
        console.log(err);
      }
    })

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


    this.aptData = {
      labels: ['FEB', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
      datasets: [
        {
          label: 'Compliance Percenatge',
          data: [15, 20, 10, 12, 18, 8],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
          borderWidth: 1
        }
      ]
    };

    this.barOptions = {
      responsive: false,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },

      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        maintainAspectRatio: false,
      }
    };
  }


}
