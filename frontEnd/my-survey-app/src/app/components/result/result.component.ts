import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Choice } from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  choices1:Array<Choice>=[]
  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.surveyService.fetchAllChoices()
    .subscribe((res:Array<Choice>)=>{
      console.log(res);
      this.choices1 = res;
      })
      }
  }



/*
{
choices1:Array<Choice>=[]

constructor(private surveyService : SurveyService

this.surveyService.fetchAllChoices(){
.subscribe(res:Array<Choice>)=>{
console.log(res);
this.choices1 = res;
})
}
*/
