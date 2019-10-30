import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastUpdate = new Date();

  posts = [
    {
      title: 'mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      loveIts: '3',
      created: 'Date'
    },
    {
      title: 'mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      loveIts: '3',
      created: 'Date'
    },
    {
      title: 'encore un poste',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      loveIts: '3',
      created: 'Date'
    }
  ];

  constructor(){
    
  }
}
