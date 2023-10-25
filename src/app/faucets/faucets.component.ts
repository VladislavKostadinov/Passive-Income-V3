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
  teaserFast: string = '../../assets/images/teaserLogo.jpg';
  swagBucks: string = '../../assets/images/swagbucks.webp';
  cointiply: string = '../../assets/images/cointiply.webp';
  bmf: string = '../../assets/images/bmf3.png';

  faucets = true;
  goHoney = false;
  goFFaucet = false;
  goAdbtc = false;
  goTeaserFast = false;
  goSwagbucks = false;
  goCointiply = false;
  goBmf = false;

  constructor(private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/faucets-and-more") {

          this.faucets = true;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;

        } else if (this.router.url == "/faucets-and-more/honeygain") {
          
          this.faucets = false;
          this.goHoney = true;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;

        } else if (this.router.url == "/faucets-and-more/fire-faucet") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = true;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;

        }
        else if (this.router.url == "/faucets-and-more/adbtc") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = true;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;

        }
        else if (this.router.url == "/faucets-and-more/teaserfast") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = true;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;

        }
        else if (this.router.url == "/faucets-and-more/swagbucks") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = true;
          this.goCointiply = false;
          this.goBmf = false;

        }
        else if (this.router.url == "/faucets-and-more/cointiply") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = true;
          this.goBmf = false;

        }
        else if (this.router.url == "/faucets-and-more/bmf") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = true;

        }
      }
    )
  }
}
