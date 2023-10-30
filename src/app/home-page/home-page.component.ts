import { HttpClient } from '@angular/common/http';
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
listOfOldSubs: any = [];
numberofOldSubs = 0;

newSub = false;
oldsub = false;

numberOfCmnts:number = 0;
constructor(private snackBar: MatSnackBar, private http: HttpClient) {



     
    // Perform database operations here
  
  // const conn = mysql.createConnection(access);

  

//   var mysql      = require('mysql');
//   var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'crypto'
// });
 
// try {
//     connection.connect();
    
// } catch (err) {
//     console.log(err)
// }

// connection.query('SELECT * FROM `subsriptions`', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0]);
// });
 
// connection.end();
  
  // this.db.object('/subsriptions').valueChanges().subscribe(
  //   (data:any) => {
  //     if (data) {
  //       this.listOfSubs = data;
  //       this.numberOfSubs = data.length
  //     }
  //   }
  // );
  // const fb = AngularFireModule.initializeApp(environment.firebase);
}

ngOnInit() {
//   this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
//     console.log(data)
// })
this.http.get("http://localhost:3333/intel").subscribe(data => {
  this.listOfOldSubs = data;
  for (let sub in data) {
    this.numberofOldSubs ++;
  }
  console.log(this.numberofOldSubs)
});

this.http.post<any>('http://localhost:3333/rom', 'test').subscribe(
  (data) => {
    console.log(data)
  }
)

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
    }
  }
}

addEmail () {
  // this.db.database.ref('subsriptions').child(this.numberOfSubs.toString()).set(
  //   {email: this.email}
  // ).catch(
  // (err) => {
  //   if (err) {
  //     this.snackBar.open("An error occurred. Sorry for the inconvenience.", "Dismiss")
  //   }
  // }
  // )

  console.log(this.email)
    this.http.post<any>("http://localhost:3333/sub", this.email.toString()).subscribe(data => {
    console.log(data)
})

}

subsribeFailed () {
  this.snackBar.open("E-mail incorrect", "Dismiss")
  
}
}
