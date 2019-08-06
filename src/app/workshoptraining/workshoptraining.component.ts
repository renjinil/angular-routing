import { Component, OnInit } from '@angular/core';
import { JobdataService } from '../jobdata.service';

@Component({
  selector: 'app-workshoptraining',
  templateUrl: './workshoptraining.component.html',
  styleUrls: ['./workshoptraining.component.css']
})
export class WorkshoptrainingComponent implements OnInit {
workshopTrainingData:any=[];
  constructor(private jobdata:JobdataService) { }

  ngOnInit() {
    this.jobdata.getworkshoptraining().subscribe(response=>{
      this.workshopTrainingData=response;
    })
  }

}
