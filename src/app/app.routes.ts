import { Routes } from '@angular/router';
import { HrDashboardComponent } from './component/hr/dashboard/dashboard.component';
import { ComplianceComponent } from './component/hr/compliance/compliance.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
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
        "path" : "hr/dashboard" , component:HrDashboardComponent
    },
    {
        "path" : "compliance" , component:ComplianceComponent
    },
    {
        "path":"employee-list", component: EmployeeListComponent
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
]
