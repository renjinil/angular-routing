import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestjobsComponent } from './latestjobs/latestjobs.component';
import { WorkshoptrainingComponent } from './workshoptraining/workshoptraining.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { HotjobComponent } from './hotjob/hotjob.component';
import { RecentjobsComponent } from './recentjobs/recentjobs.component';
import { ApplyjobInputComponent } from './applyjob-input/applyjob-input.component';
import { TrainingRegistrationFormComponent } from './training-registration-form/training-registration-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  // { path: '**', redirectTo: '' },
   {path:'home',component:HomeComponent ,canActivate: [AuthGuard]},
  {path:'latestjob',component:LatestjobsComponent ,canActivate: [AuthGuard],
    children:[
      {path:'Hot Jobs',component:HotjobComponent},
       {path:'Recent jobs',component:RecentjobsComponent},
        {path:'PopularJobs',component:HotjobComponent}
    ]
  },
  {path:'workshoptraining',component:WorkshoptrainingComponent ,canActivate: [AuthGuard]},
  {path:'user/:JobId',component:JobdetailsComponent},
  {path:'register',component: TrainingRegistrationFormComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
