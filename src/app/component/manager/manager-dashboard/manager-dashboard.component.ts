import { Component, OnInit } from '@angular/core';
import { HrBrandNavbarComponent } from "../../hr-brand-navbar/hr-brand-navbar.component";
import { ManagerNavbarComponent } from "../manager-navbar/manager-navbar.component";
import { ManagerService } from '../../../service/manager.service';
import { NgFor } from '@angular/common';
import { ChartModule } from 'primeng/chart';


@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [HrBrandNavbarComponent, ManagerNavbarComponent, NgFor, ChartModule],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent implements OnInit{

  numberOfEmployees:number;
  numberOfLeaveRequests:number;
  numberOfPresent:number;
  numberOfAbsent:number;
  projects:any[];
  statsData:any;
  pieOptions:any;
  labels: string[] =[];
  data: string[] = [];

  constructor(private managerService:ManagerService){}

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const backgroundColors = ['#F28B82', '#F7A7A3', '#F4C7C3', '#FAD2CF', '#F9B3B2'];
    const hoverColors = ['#E57373', '#EF9A9A', '#F48FB1', '#F8BBD0', '#F4A6A3'];
    


    this.fetchEmployeeCount();
    this.fetchLeaveRequestsCount();
    this.fetchProjects();
    this.fetchPresentCount();
    this.fetchAbsentCount();

    this.managerService.getProjectStats().subscribe({
      next:(res)=>{
        this.labels=[];
        this.data=[];

        for (let i = 0; i < res.length; i++) {
          this.labels.push(res[i].projectType);
          this.data.push(res[i].numberOfEmployee);
        }      

        this.statsData = {
          labels: this.labels,
          datasets: [
              {
                  data: this.data,
                  backgroundColor: backgroundColors,
                  borderColor: '#FFFFFF',
                  hoverBackgroundColor: hoverColors
              }
          ]
        };
    
        this.pieOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor,
                font: {
                  size: 11
                }
              },
              position: 'right',
              align: 'center'
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              titleColor: '#000', 
              bodyColor: textColor,
              borderColor: surfaceBorder,
              borderWidth: 1,
              cornerRadius: 5,
              padding: 10
            }
          },
          responsive: true,
          maintainAspectRatio: false
        };
      }
    })

  }

  fetchEmployeeCount(){
    this.managerService.getEmployeesCount().subscribe({
      next:(data)=>{
        this.numberOfEmployees = data;
      },
      error:(err)=>{
        console.log(err);
      }

    })
  }

  fetchLeaveRequestsCount(){
    this.managerService.getLeaveRequestsCount().subscribe({
      next:(data)=>{
        this.numberOfLeaveRequests=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  fetchProjects(){
    this.managerService.getProjects().subscribe({
      next:(data)=>{
        this.projects=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  fetchPresentCount(){
    this.managerService.getPresentCount().subscribe({
      next:(data)=>{
        this.numberOfPresent=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  fetchAbsentCount(){
    this.managerService.getAbsentCount().subscribe({
      next:(data)=>{
        this.numberOfAbsent=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }



}
