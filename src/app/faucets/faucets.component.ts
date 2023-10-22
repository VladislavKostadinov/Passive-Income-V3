import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-faucets',
  templateUrl: './faucets.component.html',
  styleUrls: ['./faucets.component.css']
})
export class FaucetsComponent {

  faucet: string = '../../assets/images/crypto_faucet.png';
  honeyGain: string = '../../assets/images/honeyGainLogo.webp';
  fireFaucet: string = '../../assets/images/fireFaucetLogo.png';
  moneySMS: string = '../../assets/images/moneySMS.webp';
  adbtc: string = '../../assets/images/adbtc.png';
  teaserFast: string = '../../assets/images/teaserFastwebp.webp';
  swagBucks: string = '../../assets/images/swagbucks.webp';
  cointiply: string = '../../assets/images/cointiply.webp';
  bmf: string = '../../assets/images/bmf3.png';

  faucets = true;
  goHoney = false;

  constructor(private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/faucets-and-more") {
          this.faucets = true;
          this.goHoney = false;
        } else if (this.router.url == "/faucets-and-more/honeygain") {
          this.faucets = false;
          this.goHoney = true;
        }
      }
    )
  }
}
