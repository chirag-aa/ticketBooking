import { Customer } from './../customer';
import { Component, Input, OnInit } from '@angular/core';
import { Train } from '../train';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TraininfoService } from '../traininfo.service';
import { CustomerDetail } from '../customerDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() trainDetail:Train | undefined;
  passenger1obj: any=new Customer();

  passengerDetails:Customer[]=[];


  coachType:string | undefined;
  aadharNo:String | undefined;
  payNow:boolean=false;
  paySuccessful:boolean=false;
  passenger1:boolean=true;
  coachOfp1:number |undefined;
  priceOfp1:number |undefined;
  seatOfp1:number | undefined;
  aadharDetail : CustomerDetail | undefined;
  cusage: number | undefined;
  cusmob : string | undefined;
  cusName: string | undefined;
  cusGender: string | undefined;
  constructor(private trainservice:TraininfoService,private router: Router) { 

    
  }

  ngOnInit(): void {
  }

  dummyPayNow(){
       alert("Payment of Rs"+ this.priceOfp1 + " is Successful click ok to Load ticket");
       this.paySuccessful=true;
  }
  getUserDetails(){
    this.trainservice.getAadharDetails(this.aadharNo).subscribe(data=>{
        this.aadharDetail=data;
        this.cusName=this.aadharDetail.cname;
        this.cusGender=this.aadharDetail.gender;
        this.cusage=this.aadharDetail.age;
        this.cusmob=this.aadharDetail.mobileNumber;
        this.aadharNo=this.aadharDetail.aadharNo;
    });
  }
  bookTickets(){
    this.getUserDetails();
    // if(this.p1Name==undefined || this.p1Age==undefined || this.p1Gender==undefined || this.p1Phone==undefined){
    //   alert("Some Values Are Missing Please Complete The Form");
    // }
   
     
      if(this.coachOfp1==3){
        this.coachType="3AC";
        this.seatOfp1=this.trainDetail?.seats3ac;
        this.priceOfp1=this.trainDetail?.ticketPrice3ac;
      }
      else if(this.coachOfp1==2){
        this.coachType="2AC";
        this.seatOfp1=this.trainDetail?.seats2ac;
        this.priceOfp1=this.trainDetail?.ticketPrice2ac;
      }
       else if(this.coachOfp1==1){
        this.coachType="Sleeper";
        this.seatOfp1=this.trainDetail?.seatsSl;
        this.priceOfp1=this.trainDetail?.ticketPricesl;
      }
      
    
   
      this.passenger1obj.cTrainNo=this.trainDetail?.trainNo;

      this.passenger1obj.cCoachCoosen=this.coachOfp1;
      this.passengerDetails.push(this.passenger1obj);
      if(this.seatOfp1!=null && this.seatOfp1==0){
        console.log("i am inside seats of p1");
        alert("No Seats Availabe in This for"+ this.coachOfp1+" coach. Try Some Other Train");
      }
     else{
        console.log(this.passengerDetails);
         alert("Are You Sure You Want To Book Ticket");
         this.payNow=true;
       }
      }
      registerHandler(){
        this.router.navigateByUrl('aadhar');
      }
  
}
