import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LatestjobsComponent } from './latestjobs/latestjobs.component';
import { WorkshoptrainingComponent } from './workshoptraining/workshoptraining.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { HotjobComponent } from './hotjob/hotjob.component';
import { RecentjobsComponent } from './recentjobs/recentjobs.component';
import { ApplyjobInputComponent } from './applyjob-input/applyjob-input.component';
import { TrainingRegistrationFormComponent } from './training-registration-form/training-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestjobsComponent,
    WorkshoptrainingComponent,
    JobdetailsComponent,
    HotjobComponent,
    RecentjobsComponent,
    ApplyjobInputComponent,
    TrainingRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
