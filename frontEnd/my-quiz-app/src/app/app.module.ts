import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';


import { ViewQuizesComponent } from './components/view-quizes/view-quizes.component';
import { QuestionComponent } from './components/question/question.component';

//1. Define Routes
const appRoutes: Routes = [
 
  { path: 'view',      component: ViewQuizesComponent },
  { path: 'question',  component: QuestionComponent}
  
];

//2. Add routes array to module imports
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizesComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }