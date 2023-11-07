import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


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
listOfOldSubs: any = [];
numberofOldSubs = 0;

newSub = false;
oldsub = false;

numberOfCmnts:number = 0;
constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) {}

ngOnInit() {

this.http.get("https://passive-income.icu/intel/").subscribe(data => {
  this.listOfOldSubs = data;
  for (let sub in data) {
    this.numberofOldSubs ++;
  }
}, error => {
    console.log("Server under maintenance");
    this.snackBar.open("Server under maintenance. Comments/Subscriptions temporary unavailable.", "Dismiss")
  }
  );
}


subsribe() {
  this.oldsub = false;
  this.newSub = false;
  if (!this.email) {
    this.snackBar.open("Please provide your e-mail", "Dismiss")
  } else {
    if (this.numberofOldSubs > 0) {
      for (let sub in this.listOfOldSubs) {
        if (this.listOfOldSubs[sub] == this.email) {
          this.oldsub = true;
          this.snackBar.open("You've already subscribed with this e-mail", "Dismiss")
        } else {
          this.newSub = true;
        } 
      }
    } 
    console.log(this.newSub, this.oldsub)
    if(this.newSub && !this.oldsub) {
      this.addEmail()
      this.snackBar.open("Thank you for subscribing", "Okay");
      this.listOfOldSubs.push(this.email);
      this.newSub = true;
      this.oldsub = false;
    } else if(!this.newSub && !this.oldsub) {
      this.snackBar.open("Server under maintenance. Try again later.", "Dismiss")
    }
  }
}

addEmail () {
    this.http.post<any>("https://passive-income.icu/sub/", this.email.toString()).subscribe(data => {
})
}

goExplore() {
  this.router.navigate(['/side-hustles']);
}

subsribeFailed () {
  this.snackBar.open("E-mail incorrect", "Dismiss")
  
}
}
