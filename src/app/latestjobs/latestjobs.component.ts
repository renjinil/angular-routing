import { Component, OnInit } from '@angular/core';
import { JobdataService } from '../jobdata.service';

@Component({
  selector: 'app-latestjobs',
  templateUrl: './latestjobs.component.html',
  styleUrls: ['./latestjobs.component.css']
})
export class LatestjobsComponent implements OnInit {
  jobnavList : any=[];
  latestJob : any=[];
  appliedjobs:any;
  responsejob:any;
  isdisplay=false;
  constructor(private jobdata:JobdataService) { }

  ngOnInit() {
    this.jobdata.getnavigation().subscribe(response=>{
    this.jobnavList=response;
  });
  this.jobdata.getLatestJob().subscribe(response=>{
    this.latestJob=response;
  })
}
getAppliedjob(latest){
  this.appliedjobs=latest;
  this.isdisplay=true;
}
emittedSelectedJob(event){
  
  this.jobdata.addAppliedJob(event.id, event).subscribe(response=>{
    this.responsejob =response;
    this.latestJob.map(item=>{
      if(item.id==this.responsejob.id){
        return item.ButtonLabel="Applied";
      }
    });
  });
  // this.jobdata.updateLatestJob(this.latestJob).subscribe(response=>{
  //   console.log(response);
  // })

}

}
