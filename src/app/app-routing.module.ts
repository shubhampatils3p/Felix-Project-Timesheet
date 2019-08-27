import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { CheckoutComponent } from './approvals/checkout/checkout.component';
import { TimeoffComponent } from './approvals/timeoff/timeoff.component';
import { LeavesComponent } from './approvals/leaves/leaves.component';
import { from } from 'rxjs';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { TimeSheetComponent } from './approvals/time-sheet/time-sheet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'timesheet', component: TimesheetComponent},
  {
    path: 'approvals',
    component: ApprovalsComponent,
    children: [
      {path: 'checkout', component: CheckoutComponent },
      {path: 'leave', component: LeavesComponent },
      {path: 'timeoff', component: TimeoffComponent },
      {path: 'time-sheet', component: TimeSheetComponent }
    ]
  },
  {path: 'project-list', component: ProjectListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'employee', component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
