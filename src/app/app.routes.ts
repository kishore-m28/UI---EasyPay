import { Routes } from '@angular/router';
import { HrDashboardComponent } from './component/hr/dashboard/dashboard.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { LoginComponent } from './component/auth/login/login.component';
import { JobseekerDashboardComponent } from './component/jobseeker/jobseeker-dashboard/jobseeker-dashboard.component';
import { TechnicalScoresheetComponent } from './component/recruitment/technical-scoresheet/technical-scoresheet.component';
import { HrScoresheetComponent } from './component/recruitment/hr-scoresheet/hr-scoresheet.component';
import { ManagerDashboardComponent } from './component/manager/manager-dashboard/manager-dashboard.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { OverallComplianceComponent } from './component/hr/overall-compliance/overall-compliance.component';
import { DetailedComplianceComponent } from './component/hr/detailed-compliance/detailed-compliance.component';
import { OtherComponent } from './component/hr/compliance/other/other.component';
import { GratuityComponent } from './component/hr/compliance/gratuity/gratuity.component';
import { BonusComponent } from './component/hr/compliance/bonus/bonus.component';
import { ProjectsComponent } from './component/hr/projects/projects.component';

export const routes: Routes = [
    {
        "path":"",component:LoginComponent
    },
    {
        "path" : "hr/dashboard" , component:HrDashboardComponent
    },
    {
        "path" : "projects" , component:ProjectsComponent
    },
    {
        "path" : "overall-compliance" , component:OverallComplianceComponent
    },
    {
        "path" : "detailed-compliance" , component:DetailedComplianceComponent
    },
    {
        "path" : "detailed-compliance/gratuity" , component:GratuityComponent
    },
    {
        "path" : "detailed-compliance/bonus" , component:BonusComponent
    },
    {
        "path" : "detailed-compliance/other" , component:OtherComponent
    },
    {
        "path":"employee-list", component: EmployeeListComponent
    },
    {
        "path":"employee/edit/:id", component: EmployeeEditComponent
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
    },
    {
        "path":"logout",component:LogoutComponent
    }
]
