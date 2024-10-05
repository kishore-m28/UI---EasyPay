import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { JobseekerDashboardComponent } from './component/jobseeker/jobseeker-dashboard/jobseeker-dashboard.component';
import { TechnicalScoresheetComponent } from './component/recruitment/technical-scoresheet/technical-scoresheet.component';
import { HrScoresheetComponent } from './component/recruitment/hr-scoresheet/hr-scoresheet.component';
import { PersonalDetailsComponent } from './component/jobseeker/jobseeker-register/personal-details/personal-details.component';
import { JobListComponent } from './component/jobseeker/job-list/job-list.component';
import { JobseekerProfileComponent } from './component/jobseeker/jobseeker-profile/jobseeker-profile.component';

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
    "path":"jobseeker/personalDetails",component:PersonalDetailsComponent
},
{
    "path":"job/allJobs",component:JobListComponent
},
{
    "path":"jobseeker/myProfile",component:JobseekerProfileComponent
}
];
