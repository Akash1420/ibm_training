import { Component } from '@angular/core';

@Component({
  selector: 'message',
  template: `
    
    <h1>Testing of message module: {{txt}}</h1>
  `
})
export class MessageComponent{
    
    txt:string = 'Voila!';
} 