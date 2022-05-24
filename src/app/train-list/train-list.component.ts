import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TraininfoService } from '../traininfo.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trainDetail:Train[]=[];
  constructor(private trainservice:TraininfoService) { }

  ngOnInit(): void {
    this.getTrains();
  }
  private getTrains(){
    this.trainservice.gettrainList().subscribe(data=>{
      this.trainDetail=data;
    })
  }

}
