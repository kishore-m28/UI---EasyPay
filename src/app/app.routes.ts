import { Routes } from '@angular/router';
import { HrDashboardComponent } from './component/hr/dashboard/dashboard.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { LoginComponent } from './component/auth/login/login.component';
import { JobseekerDashboardComponent } from './component/jobseeker/jobseeker-dashboard/jobseeker-dashboard.component';
import { PersonalDetailsComponent } from './component/jobseeker/jobseeker-register/personal-details/personal-details.component';
import { JobListComponent } from './component/jobseeker/job-list/job-list.component';
import { JobseekerProfileComponent } from './component/jobseeker/jobseeker-profile/jobseeker-profile.component';
import { ManagerDashboardComponent } from './component/manager/manager-dashboard/manager-dashboard.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { OverallComplianceComponent } from './component/hr/overall-compliance/overall-compliance.component';
import { DetailedComplianceComponent } from './component/hr/detailed-compliance/detailed-compliance.component';
import { OtherComponent } from './component/hr/compliance/other/other.component';
import { GratuityComponent } from './component/hr/compliance/gratuity/gratuity.component';
import { BonusComponent } from './component/hr/compliance/bonus/bonus.component';
import { ProjectsComponent } from './component/hr/projects/projects.component';
import { ManagerIssueReplyComponent } from './component/manager/manager-issue-reply/manager-issue-reply.component';
import { EditJobComponent } from './component/hr/recruitment/edit-job/edit-job.component';
import { ManagerEmployeeListComponent } from './component/manager/manager-employee-list/manager-employee-list.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { LeaveRequestsComponent } from './component/manager/leave-requests/leave-requests.component';
import { ManagerIssueListComponent } from './component/manager/manager-issue-list/manager-issue-list.component';
import { JobDescriptionComponent } from './component/jobseeker/job-description/job-description.component';
import { EmployeeSalaryListComponent } from './component/salary-computation/employee-salary-list/employee-salary-list.component';
import { ComputeComponent } from './component/salary-computation/compute/compute.component';
import { ReviewPayrollComponent } from './component/salary-computation/review-payroll/review-payroll.component';
import { AssignWorkComponent } from './component/manager/assign-work/assign-work.component';
import { RecruitDashboardComponent } from './component/manager/recruitment/recruit-dashboard/recruit-dashboard.component';
import { ManagerMainpageComponent } from './component/manager/manager-mainpage/manager-mainpage.component';
import { TechnicalScoresheetComponent } from './component/manager/recruitment/technical-scoresheet/technical-scoresheet.component';
import { TechnicalInterviewComponent } from './component/manager/recruitment/technical-interview/technical-interview.component';
import { HrMainPageComponent } from './component/hr/hr-main-page/hr-main-page.component';
import { HrInterviewComponent } from './component/hr/recruitment/hr-interview/hr-interview.component';
import { HrScoresheetComponent } from './component/hr/recruitment/hr-scoresheet/hr-scoresheet.component';
import { ScheduleTechInterviewComponent } from './component/hr/recruitment/schedule-tech-interview/schedule-tech-interview.component';
import { ScheduleHrInterviewComponent } from './component/hr/recruitment/schedule-hr-interview/schedule-hr-interview.component';
import { ViewWorkStatusComponent } from './component/manager/view-work-status/view-work-status.component';
import { JobsListComponent } from './component/hr/recruitment/jobs-list/jobs-list.component';
import { AddJobComponent } from './component/hr/recruitment/add-job/add-job.component';
import { ScreenTestComponent } from './component/hr/recruitment/screen-test/screen-test.component';
import { TechRoundStatusComponent } from './component/hr/recruitment/tech-round-status/tech-round-status.component';
import { HrRoundStatusComponent } from './component/hr/recruitment/hr-round-status/hr-round-status.component';


export const routes: Routes = [
    {
        "path":"",component:LoginComponent
    },
    {
        "path" : "hr/main-page" , component:HrMainPageComponent
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
        "path" : "recruitment/jobs-list" , component:JobsListComponent
    },
    {
        "path" : "hr/add-job" , component:AddJobComponent
    },
    {
        "path" : "hr/edit-job/:id" , component:EditJobComponent
    },
    {
        "path": "recruitment/hr-interview", component:HrInterviewComponent
    },
    {
        "path": "recruitment/hr-scoresheet/:id", component:HrScoresheetComponent
    },
    {
        "path":"recruitment/screen-test", component:ScreenTestComponent
    },
    {
        "path":"recruitment/schedule-tech-interview/:id", component:ScheduleTechInterviewComponent
    },
    {
        "path":"recruitment/tech-round-status",component:TechRoundStatusComponent
    },
    {
        "path":"recruitment/hr-round-status",component:HrRoundStatusComponent
    },
    {
        "path":"recruitment/schedule-hr-interview/:id", component:ScheduleHrInterviewComponent
    },
    {
        "path" : "compliance" , component:OverallComplianceComponent
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
        "path":"jobseeker/personalDetails",component:PersonalDetailsComponent
    },  
    {
        "path":"job/allJobs",component:JobListComponent
    },   
    {
        "path":"jobseeker/myProfile",component:JobseekerProfileComponent
    }, 
    {
        "path":"manager/main-page", component:ManagerMainpageComponent
    },
    {
        "path":"recruitment/technical-interview",component:TechnicalInterviewComponent
    },
    {
        "path":"recruitment/technical-scoresheet/:id",component:TechnicalScoresheetComponent
    },
    {
        "path":"manager/dashboard",component:ManagerDashboardComponent
    },
    {
        "path":"manager/dashboard",component:ManagerDashboardComponent
    },
    {
        "path":"logout",component:LogoutComponent
    },
    {
        "path":"manager/employee-list",component:ManagerEmployeeListComponent
    },
    {
        "path": "assignWork/:id", component:AssignWorkComponent
    },
    {
        "path":"getStatus/:id", component:ViewWorkStatusComponent
    },
    {
        "path":"manager/leave-requests", component:LeaveRequestsComponent
    },
    {
        "path":"manager/issue-list", component: ManagerIssueListComponent
    },
    {
        "path": "reply/:id", component:ManagerIssueReplyComponent
    },
    { 
        "path": 'payroll/review', component:ReviewPayrollComponent
    },
    { 
        "path": 'salary/compute', component:ComputeComponent
    },
    { 
        "path": 'run-payroll', component:EmployeeSalaryListComponent
    },
    { 
        "path": 'job-details/:jobId', component:JobDescriptionComponent
    },
    {
        "path":"logout",component:LogoutComponent
    },
]

