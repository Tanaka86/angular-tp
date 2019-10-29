import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() titreItem: string;
  @Input() contentItem: string;
  @Input() loveItsItem: string;
  @Input() createdItem: string;
  

  constructor() { }

  onLove() {
    console.log('LOVE');
  }
  onNoLove() {
    console.log('NOTLOVE');
  }

  ngOnInit() {
  }

}
