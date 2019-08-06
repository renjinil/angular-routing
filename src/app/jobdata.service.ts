import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class JobdataService {

  constructor(private http:HttpClient) { }
 
  getjobsection(){
    return this.http.get('http://localhost:4000/jobsection');
  }
  getnavigation(){
    return this.http.get('http://localhost:4000/latest_nav');
  }
  getLatestJob(){
     return this.http.get('http://localhost:4000/latest_jobs');
  }
  getworkshoptraining(){
    return this.http.get('http://localhost:4000/workshop_training');
  }
  getSingleJobData(jobid){
    return this.http.get('http://localhost:4000/jobsection/'+jobid);
  }
  addAppliedJob(jobid,jobdata){
     let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options ={ headers: headers };
    return this.http.put('http://localhost:4000/latest_jobs/'+jobid, jobdata, options)  
  }
    updateLatestJob(jobdata){
     let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options ={ headers: headers };
    return this.http.put('http://localhost:4000/latest_jobs', jobdata, options)  
  }
  
}
