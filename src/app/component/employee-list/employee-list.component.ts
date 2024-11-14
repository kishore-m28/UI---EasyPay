import { Component } from '@angular/core';
import { HrService } from '../../service/hr.service';
import { HrBrandNavbarComponent } from "../hr-brand-navbar/hr-brand-navbar.component";
import { NavbarComponent } from "../hr-navbar/navbar.component";
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [HrBrandNavbarComponent, NavbarComponent,NgFor,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: any[] = [];

  totalPages : number =0;  
  numArry:number[]=[];
  counter: number=0;
  page:number =0;
  size:number = 3; 
  last: boolean=false; 
  first: boolean=true;
  
  constructor(private hrservice: HrService, private router : Router){
    this.fetchData();
    
    console.log(this.numArry)
  }
  
  fetchData(){ 
    this.hrservice.getAllEmployees(this.page,this.size).subscribe({
      next: (data)=>{
        this.employees = data.content; 
        this.totalPages=data.totalPages;
        this.last = data.last;
        this.first = data.first;  
        console.log(this.employees);

        if (this.counter === 0 || this.numArry.length !== this.totalPages) {
          this.numArry = [];
          for (let i = 0; i < this.totalPages; i++) {
            this.numArry.push(i);
          }
        }
          
        this.counter = this.counter+1;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onPageNumberClick(n:number){
   
    this.page = n; 
    this.fetchData();
   }
   onNext(){
    this.page = this.page + 1; 
    this.fetchData();
    
   }
   onPrev(){
    this.page = this.page - 1;
    this.fetchData();
   }

   delete(id: number) {
    this.hrservice.updateInactive(id).subscribe({
      next: ()=>{
        console.log('about to fetch data');
        
        if (this.last === true && this.employees.length === 1) {
          this.page--;
        }
        this.employees = this.employees.filter(e => e.id !== id);
        this.fetchData();
        
      },

      error: (err)=>{
        console.log(err);
      }
    })
    }
}
