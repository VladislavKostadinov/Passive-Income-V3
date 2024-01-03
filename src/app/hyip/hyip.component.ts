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
  soon: string = "/assets/images/inv_soon.jpg";
  etc_cloud_ltd: string = "/assets/images/etccloudltd/etc_cover.gif";
  neoflojd: string = "/assets/images/neoflojd/banner.png"

  invest = true;
  etccloudltd = false;
  goNeoflojd = false;


  constructor(private snackBar: MatSnackBar, private router: Router) {

    this.router.events.subscribe(
      (event: any) => {
        if (this.router.url == "/investments") {
          this.invest = true;
          this.etccloudltd = false;

        } else if (this.router.url == "/investments/etccloudltd") {
          this.invest = false;
          this.etccloudltd = true;
          this.goNeoflojd = false;
        } else if (this.router.url == "/investments/neoflojd") {
          this.invest = false;
          this.etccloudltd = false;
          this.goNeoflojd = true;
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
