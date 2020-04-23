import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewSurveysComponent } from './components/view-surveys/view-surveys.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';



const appRoutes: Routes = [
 
  { path: 'view',      component: ViewSurveysComponent },
  { path: 'add',  component: AddSurveyComponent},
  { path: 'takeSurvey',component: TakeSurveyComponent }
  
];



@NgModule({
  declarations: [
    AppComponent,
    ViewSurveysComponent,
    AddSurveyComponent,
    TakeSurveyComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }