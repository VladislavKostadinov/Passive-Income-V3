import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passiveIncome';
  scroll = false;

  invest = false;
  mine = false;
  hustle = false;

  constructor(private router: Router) {
  //   if (location.hostname.indexOf('cryptoblog-929c6.web.app') === -1) {
  //     location.replace("https://passive-income.pro");
  // }

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

  goHome() {
    // this.router.navigate(['/home']);
    this.mine = false;
    this.hustle = false;
    this.invest = false;
    console.log(this.mine)
  }

  investments() {
    this.mine = false;
    this.hustle = false;
    this.invest = true;
  }

  cloudMining() {
    this.mine = true;
    this.hustle = false;
    this.invest = false;
  }

  faucets() {
    this.mine = false;
    this.hustle = true;
    this.invest = false;
  }

}
