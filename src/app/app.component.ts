import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

}
var height= window.innerHeight;
document.onclick=function(){
  var main_div=document.getElementById("main_div");
  var height_val=String(height);
  main_div.style.height= height_val+"px";
}