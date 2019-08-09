import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { JobdataService } from '../jobdata.service';

@Component({
  selector: 'app-training-registration-form',
  templateUrl: './training-registration-form.component.html',
  styleUrls: ['./training-registration-form.component.css']
})
export class TrainingRegistrationFormComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private data:JobdataService) { }
 displayuser:any=[];
 isDisplay:boolean;
 
  ngOnInit() {
    this.data.getTrainingUser().subscribe(response=>{
      console.log(response);
      this.displayuser=response;
    })
  
  }

trainingForm=this.fb.group({
  firstname: ['',Validators.required],
  lastname:['',Validators.required],
  skills :['',Validators.required],
  company: ['',Validators.required],
  address: this.fb.group({
    address:['',Validators.required],
    city:['',Validators.required],
    postal:['',Validators.required]
  }),
  training_location:['',Validators.required],
  email:['',[
    Validators.required,
     Validators.email
    ]],
  phonenumber:['',[
    Validators.required 
    // Validators.maxLength(10),
    // Validators.pattern(/^[6-9]\d{9}$/)
    ]]
});
 get firstname() {
  return this.trainingForm.get('firstname');
}
 get skills() {
  return this.trainingForm.get('skills');
}
 get company() {
  return this.trainingForm.get('company');
}
 get address() {
  return this.trainingForm.get('address.address');
}
 get city() {
  return this.trainingForm.get('address.city');
}
 get postal() {
  return this.trainingForm.get('address.postal');
}
 get training_location() {
  return this.trainingForm.get('training_location');
}
 get email() {
  return this.trainingForm.get('email');
}
 get phonenumber() {
  return this.trainingForm.get('phonenumber');
}
  // get f() { return this.trainingForm.controls; }

submitForm(){

  this.data.addTrainingUser(this.trainingForm.value).subscribe(response=>{
  }) 
    // this.data.getTrainingUser().subscribe(response=>{
    //   console.log(response);
    //   this.displayuser=response;
    // })
     alert("successfully submited");
     this.viewRegisterdUser();
     this.trainingForm.reset();
}
viewRegisterdUser(){
  this.isDisplay=true;
   this.data.getTrainingUser().subscribe(response=>{
      this.displayuser=response;
    })
}

hidelist(){
  this.isDisplay=false;
}
}
