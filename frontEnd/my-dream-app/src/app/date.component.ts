import { Component } from '@angular/core';

@Component({
  selector: 'my-date',
  template: `
    <h2>Today's date is : {{now}}</h2>
    <h1>Text to be displayed is: {{text}}</h1>
  `
})
export class DateComponent{
    now = new Date();
    text:string = 'Voila! Its Working';
}