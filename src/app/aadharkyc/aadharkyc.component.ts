import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerDetail } from '../customerDetail';
import { TraininfoService } from '../traininfo.service';

@Component({
  selector: 'app-aadharkyc',
  templateUrl: './aadharkyc.component.html',
  styleUrls: ['./aadharkyc.component.css']
})
export class AadharkycComponent implements OnInit {

  signupForm:FormGroup;
  customerDetail :CustomerDetail = new  CustomerDetail();
  genderList: String[] = ["", "Male", "Female", "Do Not Want Disclose"];

    

  constructor(private trainService:TraininfoService) { 
    this.signupForm=new FormGroup({
     
      aadharnum: new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)])),
      name: new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z ]*$"),Validators.minLength(4)])),
      gender:new FormControl("",Validators.compose([Validators.required])),
      mobileNumber:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[0-9]{10}")])),
      email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
      age:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(20),Validators.max(60)]))
    });
  }


  ngOnInit(): void {
  }
  get name(){
    return this.signupForm.get('name');
  }
  get gender(){
    return this.signupForm.get('gender');
  }
  get  mobileNumber(){
    return this.signupForm.get('mobileNumber');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get age(){
    return this.signupForm.get('age');
  }
  createForm() {
  

    this.trainService.createCustomer(this.customerDetail).subscribe(data=>{
      console.log(data);
      alert("E-KYC Successful")
    },
     error=>console.log(error)
    )    
  }


}
