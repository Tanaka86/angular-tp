import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  posts = [
    {
      title: 'mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      title: 'mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      title: 'encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ];

  constructor(){
    
  }



}
