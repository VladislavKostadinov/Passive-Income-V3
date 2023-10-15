import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent {
  
profilePic: string = '../../assets/images/profile_pic.jpg';
cryptoMatrix: string = '../../assets/images/crypto_matrix.jpg';
metaMask: string = '../../assets/images/MetaMask_Fox.svg.png';
trustWallet: string = '../../assets/images/vertical_blue.svg';
payeer: string = '../../assets/images/payeer.png';
binance: string = '../../assets/images/binance.svg';
faucetPay: string = '../../assets/images/faucetPay.webp';

numberOfCmnts:number = 0;
constructor(private db: AngularFireDatabase) {
  

  // this.db.list('minelab/comments').valueChanges().subscribe(
  //   (data) => {
  //     console.log(data);
  //     for (let x in data) {
  //       this.numberOfCmnts ++;
  //       console.log(this.numberOfCmnts);
  //     }
  //   }
  // );
  // console.log(this.numberOfCmnts);

}

// test() {

//   this.numberOfCmnts = 0;
//   this.db.list('minelab/comments').valueChanges().subscribe(
//     (data) => {
//       console.log(data);
//       for (let x in data) {
//         this.numberOfCmnts ++;
//         console.log(this.numberOfCmnts);
//       }
//     }
//   )
//   console.log(this.numberOfCmnts);

// }

// rest() {

//   this.db.database.ref("minelab").child('comments').child((this.numberOfCmnts).toString()).set(
//     {user: "Y", comment: "xtra", rating: "2"}
//   );

// }

}
