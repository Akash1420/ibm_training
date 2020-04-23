import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';
import { Choice } from '../models/choice';

const baseUrl = 'http://localhost:8000/api/survey/';
const choiceUrl='http://localhost:8000/api/choice';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {

  surveys:Array<Survey>=[]
  choices:Array<Choice>=[]
  
  

  constructor(private http: HttpClient) {

   }

   fetchAllSurveys(){
    return this.http.get(baseUrl);
   }

   fetchAllOptions(surveyName:string){
    return this.http.get(baseUrl+surveyName);
  }

  incrementCount(count: number){
    this.http.put(choiceUrl,count);

  }

   
}


