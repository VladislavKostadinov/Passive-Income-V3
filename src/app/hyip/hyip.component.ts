import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hyip',
  templateUrl: './hyip.component.html',
  styleUrls: ['./hyip.component.css']
})
export class HyipComponent {

  bitstars: string = '../../assets/images/bitstarsinv/wallpaper.jpg';
  tronfin: string = '../../assets/images/tronfin.svg';
  tron1477: string = '../../assets/images/tronfin.svg';
  merobit: string = '../../assets/images/merobit/mero_wall1.png';
  yomigt: string = '../../assets/images/yomigt/background.jpg';

  invest = true;
  bitstarsinv = false;
  merobitP = false;
  yomigtP = false;


  constructor(private snackBar: MatSnackBar, private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/investments") {
          this.invest = true;
          this.bitstarsinv = false;
          this.merobitP = false;
          this.yomigtP = false;

        } else if (this.router.url == "/investments/bitstarsinv") {
          this.invest = false;
          this.bitstarsinv = true;
          this.merobitP = false;
          this.yomigtP = false;

        } else if (this.router.url == "/investments/merobit") {
          
          this.invest = false;
          this.bitstarsinv = false;
          this.merobitP = true;
          this.yomigtP = false;

        } else if (this.router.url == "/investments/yomigt") {
          this.invest = false;
          this.bitstarsinv = false;
          this.merobitP = false;
          this.yomigtP = true;
        }
        // else if (this.router.url == "/investments/tron1477") {
          
        //   this.invest = false;
        //   this.bitstarsinv = false;
        //   this.merobitP = false;
        //   this.tron1477P = true;
        //   this.yomigtP = false;

        // }
      }
    )

  }


}
