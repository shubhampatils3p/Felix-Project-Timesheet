import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { CheckoutComponent } from './approvals/checkout/checkout.component';
import { TimeoffComponent } from './approvals/timeoff/timeoff.component';
import { LeavesComponent } from './approvals/leaves/leaves.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { TimeSheetComponent } from './approvals/time-sheet/time-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimesheetComponent,
    LeavesComponent,
    SideBarComponent,
    ApprovalsComponent,
    CheckoutComponent,
    TimeoffComponent,
    ProjectListComponent,
    ProfileComponent,
    LoginComponent,
    EmployeeComponent,
    TimeSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
