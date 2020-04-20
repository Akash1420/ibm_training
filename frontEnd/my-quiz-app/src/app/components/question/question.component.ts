import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';
import { Quiz} from 'src/app/models/quiz';
import { Choice} from 'src/app/models/choice';
import { Router } from '@angular/router';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })

export class QuestionComponent implements OnInit {
  showMessage : boolean = false;
  
  questions: Array<Question>=[]
  choices: Array<Choice>=[]
  

  constructor(private quizService : QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuestions()
    .subscribe((res:Quiz)=> {
      console.log(res);
      this.questions = res.questions;
      
    })
    
  }

}
