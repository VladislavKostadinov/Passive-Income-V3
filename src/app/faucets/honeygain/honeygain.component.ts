import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-honeygain',
  templateUrl: './honeygain.component.html',
  styleUrls: ['./honeygain.component.css']
})
export class HoneygainComponent {

  honeyGain: string = '../../../assets/images/honeyGainLogo.webp';
  honeySofa: string = '../../../assets/images/honeygain/landing_page_sofa_tv.svg';
  honeyIps: string = '../../../assets/images/honeygain/ip_number-1.svg';
  honeyLoc: string = '../../../assets/images/honeygain/location-1.svg';
  honeySpeed: string = '../../../assets/images/honeygain/speed-1.svg';
  honeyPot: string = '../../../assets/images/honeygain/small_pot_opened.svg';
  buddy: string = '../../../assets/images/honeygain/buddy.svg';

  ratings: string = '../../../assets/images/rating/icons8-star-filled-16.png';
  halfRatings: string = '../../../assets/images/rating/icons8-star-half-empty-16.png';

  constructor(private router: Router) {

  }

  goFaucets() {
    this.router.navigate(['/faucets-and-more'])
  }
}
