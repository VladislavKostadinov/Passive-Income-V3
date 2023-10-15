import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cloud-mining',
  templateUrl: './cloud-mining.component.html',
  styleUrls: ['./cloud-mining.component.css']
})
export class CloudMiningComponent {

  nftFerma: string = "../../assets/images/nft_ferma_special_logo.png";
  minelab: string = "../../assets/images/minelab_logo.png";
  f2hash: string = "../../assets/images/f2hash.webp";
  umbrella: string = '../../assets/images/umbrella_mining.jpg'

  constructor(private snackBar: MatSnackBar) {

  }

  // test() {
  //   this.snackBar.open('Message archived', 'Undo');
  // }
}
