import { NewsAppComponent } from './news-app/news-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketByDatesComponent } from './book-ticket-by-dates/book-ticket-by-dates.component';
import { CreateTrainComponent } from './create-train/create-train.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { TrainListComponent } from './train-list/train-list.component';
import { AadharkycComponent } from './aadharkyc/aadharkyc.component';

const routes: Routes = [

  {path:'trains' , component:TrainListComponent},
  {path:'addtrain',component:CreateTrainComponent},
  {path:'book',component:SearchTrainComponent},
  {path:'dates' ,component:BookTicketByDatesComponent},
  {path:'landing', component:LandingPageComponent},
  {path:'news',component:NewsAppComponent},
  {path:'aadhar',component:AadharkycComponent},
  {path:'', redirectTo:'landing' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
