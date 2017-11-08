import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
 public image: string[];
 public index: number;
 public urlImage: string;
  constructor() {
    this.index=0;
    this.image=[
      'assets/beach&music.jpg',
      'assets/beach&music2.jpg',
      'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
      'https://static.pexels.com/photos/88212/pexels-photo-88212.jpeg',
      'http://vacationidea.com/pix/img25Hy8R/travel/august_vacation_travel_t5.jpg'
    ];
    setInterval(() =>{
      this.urlImage=this.imageGetter;
    },2000)
   }
  
public get imageGetter(){
 this.index++;
 this.index%=this.image.length;
 return this.image[this.index];
}
  ngOnInit() {
  }

}
