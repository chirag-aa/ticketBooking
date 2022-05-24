import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TraininfoService } from '../traininfo.service';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent implements OnInit {

  trainDetail:Train[]=[];

  startStation:string | undefined;
  endStation:string | undefined;
  constructor(private trainservice:TraininfoService) { }

  ngOnInit(): void {
  }
   getTrainsBetweenStations(){
     this.trainservice.getTrainByStartAndEndStation(this.startStation,this.endStation).subscribe(data=>{
       this.trainDetail=data;
       console.log(this.trainDetail);
     })
   }
  
}
