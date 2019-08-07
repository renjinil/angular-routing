import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { JobdataService } from '../jobdata.service';

@Component({
  selector: 'app-applyjob-input',
  templateUrl: './applyjob-input.component.html',
  styleUrls: ['./applyjob-input.component.css']
})
export class ApplyjobInputComponent implements OnInit {
@Input() inputvariable;
@Output() selectedjob=new EventEmitter();
applied:any={};
 latestJob : any=[];
 responsejob: any;
  constructor(private jobdata:JobdataService) { 
  }

  ngOnInit() {
      this.jobdata.getLatestJob().subscribe(response=>{
    this.latestJob=response;
  })
  }
  added(){
      this.applied={
        id: this.inputvariable.id,
        jobimg_url: this.inputvariable.jobimg_url,
        job_post: this.inputvariable.job_post,
        companyname: this.inputvariable.companyname,
        Place:this.inputvariable.Place,
        time: this.inputvariable.time,
        salary:this.inputvariable.salary,
        tagged:this.inputvariable.tagged,
        ButtonLabel:"Applied"    
      };
 
      this.jobdata.addAppliedJob(this.inputvariable.id, this.applied).subscribe(response=>{ 
        this.responsejob =response;
     this.latestJob.map(item=>{
       if(item.id==this.responsejob.id){
        return item.ButtonLabel="Applied";
       }
     })
     });

 this.selectedjob.emit(this.inputvariable);
  }

}
