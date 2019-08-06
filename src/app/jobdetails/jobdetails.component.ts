import { Component, OnInit } from '@angular/core';
import { JobdataService } from '../jobdata.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  jobid:any;
  jobdata:any={};
  constructor(private route:ActivatedRoute,private data:JobdataService) { 
    this.route.params.subscribe(params =>{
      this.jobid=params['JobId'];
    })
  }

  ngOnInit() {
    this.data.getSingleJobData(this.jobid).subscribe(response=>{
      this.jobdata=response;
    })
  }

}
