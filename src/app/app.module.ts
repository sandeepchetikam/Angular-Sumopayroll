import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DataService} from './data-service';
import { StudentDetails} from './student-details';
import { SeeDetails } from './see-details';
import {EmployeeForm} from './employee-form';
import {ViewEmployees} from './view-employees.ts/view-employees';
import {EmployeeDirectory} from './employee-directory/employee-directory';
import {ChartModule}  from 'primeng/primeng';
import {DialogModule}  from 'primeng/primeng';
import {EmpDetails} from './emp-details/emp-details';
import {DraftEmployees} from './view-employees.ts/draft-employees';




@NgModule({
  declarations: [
    AppComponent,
    StudentDetails,
    SeeDetails,
    EmployeeForm,
    ViewEmployees,
    EmployeeDirectory,
    EmpDetails,
    DraftEmployees

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
     path:'details/:id',component:SeeDetails
    },
    {
      path:'employees',component:StudentDetails
    },
    {
  path: '',
  redirectTo: '/employees',
  pathMatch: 'full'
},
{ path: 'AddEmployee', component: EmployeeForm},
{ path: 'ViewEmployees',component: ViewEmployees},
{ path: 'employeedirectory', component: EmployeeDirectory},
{ path: 'empdetails/:id', component: EmpDetails},
{ path: 'draftemployees', component: DraftEmployees}
])

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
