import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { JobseekerDashboardComponent } from './component/jobseeker/jobseeker-dashboard/jobseeker-dashboard.component';
import { TechnicalScoresheetComponent } from './component/recruitment/technical-scoresheet/technical-scoresheet.component';
import { HrScoresheetComponent } from './component/recruitment/hr-scoresheet/hr-scoresheet.component';
import { ManagerDashboardComponent } from './component/manager/manager-dashboard/manager-dashboard.component';

export const routes: Routes = [
{
    "path":"",component:LoginComponent
},
{
    "path":"jobseeker/dashboard",component:JobseekerDashboardComponent
},
{
    "path":"recruitment/technical-scoresheet",component:TechnicalScoresheetComponent
},
{
    "path":"recruitment/hr-scoresheet",component:HrScoresheetComponent
},
{
    "path":"manager/dashboard",component:ManagerDashboardComponent
}

];
