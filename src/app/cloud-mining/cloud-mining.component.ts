import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloud-mining',
  templateUrl: './cloud-mining.component.html',
  styleUrls: ['./cloud-mining.component.css']
})
export class CloudMiningComponent {

  cloud = true;
  goNft = false;
  goMinelab = false;
  goF2hash = false;
  goStormGain = false;
  goGot = false;
  goBBox = false;

  nftFerma: string = "../../assets/images/nft_ferma_special_logo.png";
  minelab: string = "../../assets/images/minelab_logo.png";
  f2hash: string = "../../assets/images/f2hash.webp";
  stormGain: string = '../../assets/images/stormgain1.jpg';
  got: string = '/assets/images/got/BigLogo.png';
  bbox: string = '/assets/images/black-box/bbox_wall.jpg'

  constructor(private snackBar: MatSnackBar, private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/cloud-mining") {
          this.cloud = true;
          this.goNft = false;
          this.goF2hash = false;
          this.goStormGain = false;
          this.goGot = false;
          this.goBBox = false;

        } else if (this.router.url == "/cloud-mining/nftferma") {
          this.cloud = false;
          this.goNft = true;
          this.goF2hash = false;
          this.goStormGain = false;
          this.goGot = false;
          this.goBBox = false;

        }
        else if (this.router.url == "/cloud-mining/f2hash") {
          
          this.cloud = false;
          this.goNft = false;
          this.goF2hash = true;
          this.goStormGain = false;
          this.goGot = false;
          this.goBBox = false;

        }
        else if (this.router.url == "/cloud-mining/stormgain") {
          
          this.cloud = false;
          this.goNft = false;
          this.goF2hash = false;
          this.goStormGain = true;
          this.goGot = false;
          this.goBBox = false;

        }
        else if (this.router.url == "/cloud-mining/got") {
          
          this.cloud = false;
          this.goNft = false;
          this.goF2hash = false;
          this.goStormGain = false;
          this.goGot = true;
          this.goBBox = false;

        } else if (this.router.url == "/cloud-mining/black-box") {
          
          this.cloud = false;
          this.goNft = false;
          this.goF2hash = false;
          this.goStormGain = false;
          this.goGot = false;
          this.goBBox = true;

        }
      }
    )

  }

  // test() {
  //   this.snackBar.open('Message archived', 'Undo');
  // }
}
