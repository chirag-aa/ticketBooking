import { CustomerDetail } from './customerDetail';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class TraininfoService {

  private base_url="http://localhost:8080/api/v1/trains";
  
  constructor(private httpClient:HttpClient) { }

  gettrainList():Observable<Train[]>{
       return this.httpClient.get<Train[]>(`${this.base_url}`);
  }

  createTrain(train:Train):Observable<Object>{
    return this.httpClient.post(`${this.base_url}` ,train);
  }

  createCustomer(customerDetail:CustomerDetail):Observable<Object>{
     return this.httpClient.post(`http://localhost:8080/api/v1/cdetails`,customerDetail);
  }

  getTrainByStartAndEndStation(startStation:string | undefined,endStation:string | undefined):Observable<Train[]>{
    console.log("request made");
     return this.httpClient.get<Train[]>(`http://localhost:8080/api/v1/trains/startStationandendStation?startStation=${startStation}&endStation=${endStation}`);
  }
  getTrainByStartAndEndAndDate(startStation:string | undefined,endStation:string | undefined, dateOfJourney:string | undefined):Observable<Train[]>{
    console.log("in search by dates function request made");
    return this.httpClient.get<Train[]>(`http://localhost:8080/api/v1/trains/startStationandendStationandJourneyDate?startStation=${startStation}&endStation=${endStation}&dateOfJourney=${dateOfJourney}`);
  }

  getNews():Observable<any>{
       return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=4c250882d56f4d90bf9887e909a7a510`);
  }

  getAadharDetails(aadharNo:String | undefined):Observable<CustomerDetail>{
    return this.httpClient.get<CustomerDetail>(`http://localhost:8080/api/v1/cdetails?aadharNo=${aadharNo}`);
  }
}
