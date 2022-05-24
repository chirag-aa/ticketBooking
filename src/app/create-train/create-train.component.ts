import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TraininfoService } from '../traininfo.service';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.css']
})
export class CreateTrainComponent implements OnInit {

  train: Train = new Train();
  trainNo: number | undefined;
  startStation: string | undefined;
  endStation: string | undefined;
  trainName: string | undefined;
  deptTimeFromSrc: string | undefined;
  arrTimeAtdesti: string | undefined;
  journeyTime: number | undefined;
  dateOfJourney: string | undefined;
  seats3ac: number | undefined;
  ticketPrice3ac: number | undefined;
  seats2ac: number | undefined;
  ticketPrice2ac: number | undefined;
  seatsSl: number | undefined;
  ticketPricesl: number | undefined;
  constructor(private trainservice: TraininfoService) { }

  ngOnInit(): void {

  }
  submitHandler() {
    this.train.trainNo = this.trainNo;
    this.train.startStation = this.startStation;
    this.train.endStation = this.endStation;
    this.train.trainName = this.trainName;
    this.train.arrTimeAtdesti = this.arrTimeAtdesti;
    this.train.deptTimeFromSrc = this.deptTimeFromSrc;
    this.train.dateOfJourney=this.dateOfJourney;
    this.train.seats3ac = this.seats3ac;
    this.train.ticketPrice3ac=this.ticketPrice3ac;
    this.train.seats2ac = this.seats2ac;
    this.train.ticketPrice2ac=this.ticketPrice2ac;
    this.train.seatsSl = this.seatsSl;
    this.train.ticketPricesl=this.ticketPricesl;
    
    this.saveTrain();
  }

  saveTrain() {
    this.trainservice.createTrain(this.train).subscribe(data => {
      console.log(data);
      alert("Train Added Successfully")
    },
      error => console.log(error));
  }

}
