import { Component } from '@angular/core';

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

}
