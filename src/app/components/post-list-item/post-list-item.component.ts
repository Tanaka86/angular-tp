import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  lastUpdate = new Date();
  compteurL:number = 0;
  compteurNl:number = 0;

 

  @Input() titreItem: string;
  @Input() contentItem: string;
  @Input() loveItsItem: string;

  
  constructor() { }

  onLove() {
    this.compteurL++;
    console.log(this.compteurL);
  }
  onNoLove() {
   this.compteurNl++;
   console.log(this.compteurNl);
  }

  getColor(){
    if (this.compteurL > this.compteurNl) {
      return 'blue';
  
    } 
    else if( this.compteurL < this.compteurNl) {
      return 'red';
    }
  
  
  }

  ngOnInit() {
  }

}
