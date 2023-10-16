import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatSnackBar } from '@angular/material/snack-bar';

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

numberOfSubs = 0;
email = "";
emailDuplicate = false;
currentSub = false;
emailAction = false;
listOfSubs:any = {};

numberOfCmnts:number = 0;
constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) {
  this.db.list('subsriptions').valueChanges().subscribe(
    (data:any) => {
      if (data) {
        this.listOfSubs = data;
        this.numberOfSubs = data.length
      }
    }
  );
}

subsribe() {
  if (!this.email) {
    this.snackBar.open("Please provide your e-mail", "Dismiss")
  } else {
    if (this.listOfSubs.length > 0) {
      for (let sub in this.listOfSubs) {
        if (this.listOfSubs[sub]['email'] == this.email) {
          console.log((this.listOfSubs[sub]['email'] == this.email))
          this.snackBar.open("You've already subscribed with this e-mail", "Dismiss")
        } else {
          this.addEmail()
          this.snackBar.open("Thank you for subscribing", "Okay")
        }
      }
    } else {
      this.addEmail()
      this.snackBar.open("Thank you for subscribing", "Okay")
    }
  }
}

addEmail () {
  this.db.database.ref('subsriptions').child(this.numberOfSubs.toString()).set(
    {email: this.email}
  ).catch(
  (err) => {
    if (err) {
      this.snackBar.open("An error occurred. Sorry for the inconvenience.", "Dismiss")
    }
  }
  )
}

subsribeFailed () {
  this.snackBar.open("E-mail incorrect", "Dismiss")
  
}
}
