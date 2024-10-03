import { Routes } from '@angular/router';
import { HrDashboardComponent } from './component/hr/dashboard/dashboard.component';
import { ComplianceComponent } from './component/hr/compliance/compliance.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';

export const routes: Routes = [
    {
        "path" : "hr/dashboard" , component:HrDashboardComponent
    },
    {
        "path" : "compliance" , component:ComplianceComponent
    },
    {
        "path":"employee-list", component: EmployeeListComponent
    },
];
