import { TraininfoService } from './../traininfo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-app',
  templateUrl: './news-app.component.html',
  styleUrls: ['./news-app.component.css']
})
export class NewsAppComponent implements OnInit {
  
  data:any;
  articlesarr:any;
  constructor(private trainService:TraininfoService) { }

  ngOnInit(): void {
    this.trainService.getNews().subscribe(data=>{
      this.data=data
      this.articlesarr=data.articles;
      console.log(this.articlesarr);
    })
  }
  loadNews(){
  
  }
}
