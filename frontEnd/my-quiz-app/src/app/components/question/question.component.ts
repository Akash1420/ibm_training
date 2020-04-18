import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { Router } from '@angular/router';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })

export class QuestionComponent implements OnInit {
  showMessage : boolean = false;
  quizes: Array<Quiz> = []
  

  constructor(private quizService : QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuizes()
    .subscribe((res:Array<Quiz>)=> {
      console.log(res);
      this.quizes = res;
    })
    
  }

}
