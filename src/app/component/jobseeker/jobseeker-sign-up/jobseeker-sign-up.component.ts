import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerService } from '../../../service/jobseeker.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JobService } from '../../../service/job.service';

@Component({
  selector: 'app-jobseeker-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './jobseeker-sign-up.component.html',
  styleUrl: './jobseeker-sign-up.component.css'
})
export class JobseekerSignUpComponent {
  
  userForm: FormGroup;
  show:boolean=false;
  id:any
 
  constructor(private router:Router,private jobSeekerService:JobseekerService,private jobService:JobService){
    this.id=jobService.getJobId()
    console.log(this.id)
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      reenterPassword: new FormControl('', Validators.required)
    }, this.passwordsMatchValidator);
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password').value;
    const reenterPassword = form.get('reenterPassword').value;
    return password === reenterPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.userForm.valid) {
      const username = this.userForm.get('username')?.value;
      const password = this.userForm.get('password')?.value;

      this.jobSeekerService.jobSeekerSignUp({
        "username": username,
        "password": password
      }).subscribe({
        next: (data) => {
          console.log(data);
          this.userForm.reset();
          this.show=true;
        },
        error: (err) => {
          console.log(err.message);
        }
      });
    }
  }

  onRegister(){
    this.router.navigateByUrl('login')
  }

  }


  
  


