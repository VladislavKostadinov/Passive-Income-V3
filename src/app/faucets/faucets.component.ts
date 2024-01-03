import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-faucets',
  templateUrl: './faucets.component.html',
  styleUrls: ['./faucets.component.css']
})
export class FaucetsComponent {

  faucet: string = '../../assets/images/faucet5.jpg';
  honeyGain: string = '../../assets/images/honeyGainLogo.webp';
  fireFaucet: string = '../../assets/images/fireFaucetLogo.png';
  moneySMS: string = '../../assets/images/moneySMS.webp';
  adbtc: string = '../../assets/images/adbtc.png';
  teaserFast: string = '../../assets/images/teaserLogo.jpg';
  swagBucks: string = '../../assets/images/swagbucks.webp';
  cointiply: string = '../../assets/images/cointiply.webp';
  bmf: string = '../../assets/images/bmf3.png';
  mir: string = '../../assets/images/mir/logo.svg';
  camel: string = '/assets/images/camelbtc/logo3.png';
  bitsypool: string = '/assets/images/bitsypool/frontlogo.svg'

  faucets = true;
  goHoney = false;
  goFFaucet = false;
  goAdbtc = false;
  goTeaserFast = false;
  goSwagbucks = false;
  goCointiply = false;
  goBmf = false;
  goMir = false;
  goCamel = false;
  goBitsy = false;

  constructor(private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/side-hustles") {

          this.faucets = true;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        } else if (this.router.url == "/side-hustles/honeygain") {
          
          this.faucets = false;
          this.goHoney = true;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        } else if (this.router.url == "/side-hustles/fire-faucet") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = true;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/adbtc") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = true;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/teaserfast") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = true;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/swagbucks") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = true;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/cointiply") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = true;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/bmf") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = true;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/mir") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = true;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/camelbtc") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = true;
          this.goCamel = false;
          this.goBitsy = false;

        }
        else if (this.router.url == "/side-hustles/bitsypool") {
          
          this.faucets = false;
          this.goHoney = false;
          this.goFFaucet = false;
          this.goAdbtc = false;
          this.goTeaserFast = false;
          this.goSwagbucks = false;
          this.goCointiply = false;
          this.goBmf = false;
          this.goMir = false;
          this.goCamel = false;
          this.goBitsy = true;

        }
      }
    )
  }
}
