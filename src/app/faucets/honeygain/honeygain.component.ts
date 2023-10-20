import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  arr1: string = '../../../assets/images/ar1.png';
  arr2: string = '../../../assets/images/ar2.png';

  nickName: string = "";
  rating: number = 0;
  comment: string = "";

  listOfComments: any = [];
  listOfGuests: any = [];
  listOfRatings: any = [];
  numberOfComments: number = 0;

  commentPages:any = [];

  constructor(private router: Router, private db: AngularFireDatabase, private snackBar: MatSnackBar) {

    this.db.list('honeygain/comments').valueChanges().subscribe(
      (data:any) => {
        if (data) {
          this.numberOfComments = data.length;
          for (let c in data) {
            this.listOfComments.push(data[c]['comment']);
            this.listOfGuests.push(data[c]['nick']);
            this.listOfRatings.push(data[c]['rating']); 
          }
          for (let i = 0; i <= this.numberOfComments; i+=3) {
            this.commentPages.push("page");
            console.log(this.commentPages)
          }
        }
      }
    );
  }


  goFaucets() {
    this.router.navigate(['/faucets-and-more'])
  }

  getRating(rate: any) {
      this.rating = rate;
  }

  post() {
    if (this.comment == "") {
      this.snackBar.open("Comment field can not be empty!", "Okay")
    } else {
      this.addComment();
      }
    }

  addComment () {
    this.db.database.ref('honeygain').child('comments').child(this.numberOfComments.toString()).set(
      {
        nick: this.nickName == "" ? "Guest" : this.nickName,
        rating: this.rating,
        comment: this.comment
      }
    ).catch(
      (err) => {
        if (err) {
          this.snackBar.open("An error occurred. Sorry for the inconvenience.", "Dismiss");
        }
      }
    )
    this.snackBar.open("Thank you for your comment", "Dismiss");
  }
}
