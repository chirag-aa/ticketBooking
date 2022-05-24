import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainListComponent } from './train-list/train-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTrainComponent } from './create-train/create-train.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTrainComponent } from './search-train/search-train.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookTicketByDatesComponent } from './book-ticket-by-dates/book-ticket-by-dates.component';
import { CustomerComponent } from './customer/customer.component';
import { NewsAppComponent } from './news-app/news-app.component';
import { AadharkycComponent } from './aadharkyc/aadharkyc.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainListComponent,
    CreateTrainComponent,
    SearchTrainComponent,
    LandingPageComponent,
    BookTicketByDatesComponent,
    CustomerComponent,
    NewsAppComponent,
    AadharkycComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
