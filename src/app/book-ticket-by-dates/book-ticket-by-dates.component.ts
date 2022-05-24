import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TraininfoService } from '../traininfo.service';

@Component({
  selector: 'app-book-ticket-by-dates',
  templateUrl: './book-ticket-by-dates.component.html',
  styleUrls: ['./book-ticket-by-dates.component.css']
})
export class BookTicketByDatesComponent implements OnInit {

  startStation: string | undefined;
  endStation: string | undefined;
  journeyDate: string | undefined;
  trainsArr: Train[] = [];
  trainDetail: Train | undefined;
  trainNotExist:boolean=false;
  constructor(private trainservice: TraininfoService) { }

  ngOnInit(): void {
  }
  getTrainsBetweenStationswithDates() {
    this.trainservice.getTrainByStartAndEndAndDate(this.startStation, this.endStation, this.journeyDate).subscribe(data => {
      this.trainsArr = data;
      if(this.trainsArr.length<=0){
         this.trainNotExist=true;
      }
      else{
        this.trainNotExist=false;
      }
      console.log(this.trainsArr);
    })
  }
  bookingTickets(item: Train) {
    this.trainDetail = item;
    if (this.trainDetail.seats2ac == 0 && this.trainDetail.seatsSl == 0 && this.trainDetail.seats3ac == 0) {
      alert(this.trainDetail.trainName + " Has No Seats Left Try Some Other Dates or Some other trains");
    }
    else {
      alert("Are You Sure You want to book tickets in " + this.trainDetail.trainName)
    }
  }
}
