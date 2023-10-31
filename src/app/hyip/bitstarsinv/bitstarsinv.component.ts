import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogueComponent } from 'src/app/mat-dialogue/mat-dialogue/mat-dialogue.component';

@Component({
  selector: 'app-bitstarsinv',
  templateUrl: './bitstarsinv.component.html',
  styleUrls: ['./bitstarsinv.component.css']
})
export class BitstarsinvComponent {

  bitstars: string = '../../../assets/images/bitstarsinv/logo.png';

  reg: string = '../../../assets/images/bitstarsinv/reg.png';
  deposit: string = '../../../assets/images/bitstarsinv/deposit.png';
  withdraw: string = '../../../assets/images/bitstarsinv/withdraw.png';
  explore: string = '../../../assets/images/bitstarsinv/explore.png';
  refer: string = '../../../assets/images/refer.webp'

  bitstars_wall: string = '../../../assets/images/bitstarsinv/bitstars_cover.jpg';

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

  guest:any = "";
  rate: any = 0;
  cmnt: any = "";

  numberOC = [];

  pageListGuests: any = [];
  pageListComments: any = [{}];
  numberOfComments: number = 0;

  commentPages:any = [];
  currentPage: number = 1;

  singlePage: boolean = true;
  multiplePage: boolean = false;
  newComment: boolean = false;

  cmtnSct = document.getElementById('cmtnSect');

  avarageRating: number = 0;
  ratingHalf: boolean = false;
  trueRatings: any = [];


  constructor(private router: Router, private snackBar: MatSnackBar, 
    private dialog: MatDialog, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get("http://localhost:3333/bitstarsinvUsers").subscribe(data => {
      this.listOfGuests = data;
      console.log(this.listOfGuests)
      this.listOfComments.push(data);
      if (data) {
        for (let u in data) {
          this.numberOfComments ++;
        }
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
        for (let i = 0; i < this.numberOfComments; i+=3) {
          if (this.newComment) {
            return
          } else {
            this.commentPages.push("page");
          }
        } 
      }
    });
    this.http.get("http://localhost:3333/bitstarsinvRatings").subscribe(data => {
      this.listOfRatings = data;
      this.listOfComments.push(data);
      for (let r of this.listOfRatings) {
        if (parseInt(r)) {
          this.avarageRating += parseInt(r);
          this.trueRatings.push("realRate")
        }
      }
      this.avarageRating /= this.trueRatings.length;
      if (this.avarageRating > 0 && this.avarageRating % 1 != 0) {
        this.ratingHalf = true;
      } else {
        this.ratingHalf = false;
      }
    });
    this.http.get("http://localhost:3333/bitstarsinvComments").subscribe(data => {
      this.listOfComments.push(data);
      console.log(this.listOfComments);
      for (let el in this.listOfComments) {
        this.listOfComments[el] = this.listOfComments[el].reverse();
   

        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }
      console.log(this.listOfComments)
    });
   
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }
  goInvest() {
    this.router.navigate(['/investments'])
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
    this.guest = "";
    this.rate = 0;
    this.cmnt = "";
      // this.db.database.ref('investments').child('merobit').child('comments').child(this.numberOfComments.toString()).set(
      //   {
      //     nick: this.nickName == "" ? "Guest" : this.nickName,
      //     rating: this.rating,
      //     comment: this.comment
      //   }
      // ).catch(
      //   (err) => {
      //     if (err) {
      //       this.snackBar.open("An error occurred. Sorry for the inconvenience.", "Dismiss");
      //     }
      //   }
      // )

      this.guest = this.nickName == "" ? "Guest" : this.nickName;
      this.rate = this.rating;
      this.cmnt = this.comment;
      this.http.post<any>("http://localhost:3333/bitstarsinvPost", 
      [this.guest, this.rate, this.cmnt])
      .subscribe(data => {
      })
      this.snackBar.open("Thank you for your comment", "Dismiss");
  
      this.commentPages = this.commentPages / 2;
  
      setTimeout(() => {
        this.snackBar.dismiss();
        location.reload();
      }, 3000);
  }

  goPage(page:any) { 
    if  (page == this.currentPage) {
      return;
    } else {
      this.currentPage = page;
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }  
    }
    for (let el in this.listOfComments) {
      for (let em in this.listOfComments[el]) {
        this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
      }
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
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }  
    }); 
  }

  pageBackward() {
    if (this.currentPage == 1) {
      return;
    } else {
      this.currentPage--;
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }    }
    for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }
  }

  pageForward() {
    if (this.currentPage == this.commentPages.length) {
      return;
    } else {
      this.currentPage++;
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }  
    }
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(this.currentPage*3-3, this.currentPage*3);
        }
      }  
    }
}
