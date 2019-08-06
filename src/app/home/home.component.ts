import { Component, OnInit } from '@angular/core';
import { JobdataService } from '../jobdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
jobsectionlist:any=[];
  constructor(private jobdata:JobdataService) { }

  ngOnInit() {
    this.jobdata.getjobsection().subscribe(response=>{
     this.jobsectionlist=response;
    })
  }

}
