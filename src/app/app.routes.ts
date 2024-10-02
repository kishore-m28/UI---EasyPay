import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { JobseekerDashboardComponent } from './component/jobseeker/jobseeker-dashboard/jobseeker-dashboard.component';

export const routes: Routes = [
{
    "path":"",component:LoginComponent
},
{
    "path":"jobseeker/dashboard",component:JobseekerDashboardComponent
}
];
