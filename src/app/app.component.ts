import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passiveIncome';
  scroll = false;
  constructor() {
    var title = document.getElementsByClassName('welcomeMsg') as HTMLCollectionOf<HTMLElement>;
    var topNav = document.getElementsByClassName("topnav") as HTMLCollectionOf<HTMLElement>;
    var topNavHover = "topnav a:hover {color: red;}"
    document.addEventListener("scroll", (event) => {
      this.scroll = true;
      if(window.scrollY==0){
        this.scroll = false;
        title[0].style.color = 'lightcoral';
        topNav[1].classList.remove('topNav2');
        topNav[0].classList.remove('topNavMain');
       } else {
        title[0].style.color = 'goldenrod';
        topNav[1].classList.add('topNav2');
        topNav[0].classList.add('topNavMain');
       }
    })


  }


}
