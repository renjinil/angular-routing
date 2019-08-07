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

const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'home',component:HomeComponent},
  {path:'latestjob',component:LatestjobsComponent,
    children:[
      {path:'Hot Jobs',component:HotjobComponent},
       {path:'Recent jobs',component:RecentjobsComponent},
        {path:'PopularJobs',component:HotjobComponent}
    ]
  },
  {path:'workshoptraining',component:WorkshoptrainingComponent},
  {path:'user/:JobId',component:JobdetailsComponent},
  {path:'register',component: TrainingRegistrationFormComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
