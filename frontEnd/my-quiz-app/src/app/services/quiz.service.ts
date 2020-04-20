// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuizService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz';


const baseUrl = 'http://localhost:8000/api/quiz/'
const quesUrl = 'http://localhost:8000/api/quiz/react'
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  name: string;

  constructor(private http: HttpClient) { 
    
  }

  fetchAllQuizes(){
    return this.http.get(baseUrl);
  }

  fetchAllQuestions(){
     return this.http.get(quesUrl);
    }

}