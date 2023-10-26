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

  nftFerma: string = "../../assets/images/nft_ferma_special_logo.png";
  minelab: string = "../../assets/images/minelab_logo.png";
  f2hash: string = "../../assets/images/f2hash.webp";
  stormGain: string = '../../assets/images/stormgain1.jpg'

  constructor(private snackBar: MatSnackBar, private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/cloud-mining") {
          this.cloud = true;
          this.goNft = false;
          this.goMinelab = false;
          this.goF2hash = false;
          this.goStormGain = false;

        } else if (this.router.url == "/cloud-mining/nftferma") {
          this.cloud = false;
          this.goNft = true;
          this.goMinelab = false;
          this.goF2hash = false;
          this.goStormGain = false;;

        } else if (this.router.url == "/cloud-mining/minelab") {
          
          this.cloud = false;
          this.goNft = false;
          this.goMinelab = true;
          this.goF2hash = false;
          this.goStormGain = false;

        }
        else if (this.router.url == "/cloud-mining/f2hash") {
          
          this.cloud = false;
          this.goNft = false;
          this.goMinelab = false;
          this.goF2hash = true;
          this.goStormGain = false;

        }
        else if (this.router.url == "/cloud-mining/stormgain") {
          
          this.cloud = false;
          this.goNft = false;
          this.goMinelab = false;
          this.goF2hash = false;
          this.goStormGain = true;

        }
      }
    )

  }

  // test() {
  //   this.snackBar.open('Message archived', 'Undo');
  // }
}
