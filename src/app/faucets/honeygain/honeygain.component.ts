import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogueComponent } from 'src/app/mat-dialogue/mat-dialogue/mat-dialogue.component';

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
  pageListGuests: any = [];
  pageListComments: any = [];
  numberOfComments: number = 0;

  commentPages:any = [];
  currentPage: number = 1;

  singlePage: boolean = true;
  multiplePage: boolean = false;
  newComment: boolean = false;

  cmtnSct = document.getElementById('cmtnSect');


  constructor(private router: Router, private db: AngularFireDatabase, private snackBar: MatSnackBar, 
    private dialog: MatDialog) {
 


    this.db.list('honeygain/comments').valueChanges().subscribe(
      (data:any) => {
        if (data) {
          this.numberOfComments = data.length;
          if (this.numberOfComments > 3) {
            this.singlePage = false
          }  else {
            this.singlePage = true;
          }
          if (this.numberOfComments > 12) {
            this.multiplePage = true;
          } else {
            this.multiplePage = false;
          }
          for (let c in data) {
            this.listOfComments.push(data[c]['comment']);
            this.listOfGuests.push(data[c]['nick']);
            this.listOfRatings.push(data[c]['rating']); 
            this.pageListGuests.push(data[c]);
          }
          for (let i = 0; i < this.numberOfComments; i+=3) {
            this.commentPages.push("page");
          } 
          this.pageListComments = this.pageListGuests.reverse().slice(this.currentPage*3-3, this.currentPage*3);
        } else {
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
    this.newComment = true;
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
  
      this.commentPages = this.commentPages / 2;
  
      setTimeout(() => {
        this.snackBar.dismiss();
        location.reload();
      }, 2000);

      
  }


  goPage(page:any) { 
    if  (page == this.currentPage) {
      return;
    } else {
      this.currentPage = page;
      this.pageListComments = this.pageListGuests.reverse().slice(this.currentPage*3-3, this.currentPage*3);
    }
  }

  choosePage() {
    let dialogRef = this.dialog.open(MatDialogueComponent, {
      height: '240px',
      width: '200px', data: { page: 1 } 
    });
    dialogRef.afterClosed().subscribe(result => { 
      if (result >= this.commentPages.length) {
        this.currentPage = this.commentPages.length 
      } 
      else if (result <= 1) {
        this.currentPage = 1;
      }
      else {
        if (result > 0) {
          this.currentPage = result;
        } else {
          this.currentPage = this.currentPage;
        }
      } 
      this.pageListComments = this.pageListGuests.reverse().slice(this.currentPage*3-3, this.currentPage*3);
    }); 
  }

  pageBackward() {
    if (this.currentPage == 1) {
      return;
    } else {
      this.currentPage--;
      this.pageListComments = this.pageListGuests.reverse().slice(this.currentPage*3-3, this.currentPage*3);
    }

  }

  pageForward() {
    if (this.currentPage == this.commentPages.length) {
      return;
    } else {
      this.currentPage++;
      this.pageListComments = this.pageListGuests.reverse().slice(this.currentPage*3-3, this.currentPage*3);
    }
  }
}
