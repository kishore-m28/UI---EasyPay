import { Component } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { BrandNavbarComponent } from "../../manager/brand-navbar/brand-navbar.component";
import { EmpNavbarComponent } from "../emp-navbar/emp-navbar.component";

@Component({
  selector: 'app-issue-post',
  standalone: true,
  imports: [CommonModule, FormsModule, BrandNavbarComponent, EmpNavbarComponent],
  templateUrl: './issue-post.component.html',
  styleUrl: './issue-post.component.css'
})
export class IssuePostComponent {

  issueDescription: string = '';
  issue:any;


  constructor(private employeeService:EmployeeService){
    this.getReplies();

  }
  submitIssue(issueForm: NgForm) {
    if (issueForm.valid) {
      const issueObj = { description: this.issueDescription };  // Payload for API
      this.employeeService.postIssue(issueObj).subscribe({
        next: (response) => {
          console.log('Issue submitted successfully:', response);
          this.issueDescription = '';  // Reset form after submission
          issueForm.resetForm();  // Clear the form fields
        },
        error: (error) => {
          console.error('Error submitting issue:', error);
        }
      });
    }
  }

  // Fetch replies (assuming it's called after issue submission or onInit)
  getReplies() {
    this.employeeService.getIssue().subscribe({
      next: (data) => {
        this.issue = data;  // Assuming response contains replies array
      },
      error: (error) => {
        console.error('Error fetching replies:', error);
      }
    });
  }
}
