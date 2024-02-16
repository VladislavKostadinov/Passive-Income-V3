import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogueComponent } from 'src/app/mat-dialogue/mat-dialogue/mat-dialogue.component';

@Component({
  selector: 'app-etccloud',
  templateUrl: './etccloud.component.html',
  styleUrls: ['./etccloud.component.css'],
})
export class EtccloudComponent {
  etc: string = '/assets/images/etccloudltd/etc.jpg';

  reg: string = '/assets/images/etccloudltd/home.png';
  deposit: string = '/assets/images/etccloudltd/recharge.png';
  withdraw: string = '/assets/images/etccloudltd/withdraw.png';
  explore: string = '/assets/images/etccloudltd/language.png';
  refer: string = '/assets/images/etccloudltd/referral.png';

  etccloudltd_wall: string = '/assets/images/etccloudltd/etc_cover1.gif';

  ratings: string = '/assets/images/rating/icons8-star-filled-16.png';
  halfRatings: string = '/assets/images/rating/icons8-star-half-empty-16.png';

  arr1: string = '/assets/images/ar1.png';
  arr2: string = '/assets/images/ar2.png';

  nickName: string = '';
  rating: number = 0;
  comment: string = '';

  listOfComments: any = [];
  listOfGuests: any = [];
  listOfRatings: any = [];

  guest: any = '';
  rate: any = 0;
  cmnt: any = '';

  numberOC = [];

  pageListGuests: any = [];
  pageListComments: any = [{}];
  numberOfComments: number = 0;

  commentPages: any = [];
  currentPage: number = 1;

  singlePage: boolean = true;
  multiplePage: boolean = false;
  newComment: boolean = false;

  cmtnSct = document.getElementById('cmtnSect');

  avarageRating: number = 0;
  ratingHalf: boolean = false;
  trueRatings: any = [];

  maintenance: boolean = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http
      .get('https://passive-income.icu/etccloudltd')
      .subscribe((data) => {});

    this.http.get('https://passive-income.icu/etccloudltdUsers').subscribe(
      (data) => {
        if (data) {
          this.listOfGuests = data;
          this.listOfComments.push(data);

          for (let u in data) {
            this.numberOfComments++;
          }
          if (this.numberOfComments > 3) {
            this.singlePage = false;
          } else {
            this.singlePage = true;
          }
          if (this.numberOfComments > 12) {
            this.multiplePage = true;
          } else {
            this.multiplePage = false;
          }
          for (let i = 0; i < this.numberOfComments; i += 3) {
            if (this.newComment) {
              return;
            } else {
              this.commentPages.push('page');
            }
          }
          this.http
            .get('https://passive-income.icu/etccloudltdRatings')
            .subscribe(
              (data) => {
                if (data) {
                  this.listOfRatings = data;
                  this.listOfComments.push(data);
                  for (let r of this.listOfRatings) {
                    if (parseInt(r)) {
                      this.avarageRating += parseInt(r);
                      this.trueRatings.push('realRate');
                    }
                  }
                  this.avarageRating /= this.trueRatings.length;
                  if (this.avarageRating > 0 && this.avarageRating % 1 != 0) {
                    this.ratingHalf = true;
                  } else {
                    this.ratingHalf = false;
                  }
                  this.http
                    .get('https://passive-income.icu/etccloudltdComments')
                    .subscribe(
                      (data) => {
                        if (data) {
                          this.listOfComments.push(data);
                          for (let el in this.listOfComments) {
                            this.listOfComments[el] =
                              this.listOfComments[el].reverse();
                            for (let em in this.listOfComments[el]) {
                              this.numberOC = this.listOfComments[el].slice(
                                this.currentPage * 3 - 3,
                                this.currentPage * 3
                              );
                            }
                          }
                        }
                      },
                      (error) => {
                        this.maintenance = true;
                      }
                    );
                }
              },
              (error) => {
                this.maintenance = true;
              }
            );
        }
      },
      (error) => {
        this.maintenance = true;
        this.snackBar.open(
          'Server under maintenance. Comments/Subscriptions temporary unavailable.',
          'Dismiss'
        );
      }
    );
  }

  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }
  goInvest() {
    this.router.navigate(['/investments']);
  }

  getRating(rate: any) {
    this.rating = rate;
  }

  post() {
    this.newComment = true;
    if (this.comment == '') {
      this.snackBar.open('Comment field can not be empty!', 'Okay');
    } else {
      this.addComment();
    }
  }

  addComment() {
    this.guest = '';
    this.rate = 0;
    this.cmnt = '';
    this.guest = this.nickName == '' ? 'Guest' : this.nickName;
    this.rate = this.rating;
    this.cmnt = this.comment;

    if (!this.maintenance) {
      this.http
        .post<any>('https://passive-income.icu/etccloudltdPost', [
          this.guest,
          this.rate,
          this.cmnt,
        ])
        .subscribe((data) => {});
      this.snackBar.open('Thank you for your comment', 'Dismiss');

      this.commentPages = this.commentPages / 2;

      setTimeout(() => {
        this.snackBar.dismiss();
        location.reload();
      }, 3000);
    } else {
      this.snackBar.open('Server under maintenance. Try later.', 'Dismiss');
    }
  }

  goPage(page: any) {
    if (page == this.currentPage) {
      return;
    } else {
      this.currentPage = page;
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(
            this.currentPage * 3 - 3,
            this.currentPage * 3
          );
        }
      }
    }
    for (let el in this.listOfComments) {
      for (let em in this.listOfComments[el]) {
        this.numberOC = this.listOfComments[el].slice(
          this.currentPage * 3 - 3,
          this.currentPage * 3
        );
      }
    }
  }

  choosePage() {
    let dialogRef = this.dialog.open(MatDialogueComponent, {
      height: '240px',
      width: '200px',
      data: { page: 1 },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result >= this.commentPages.length) {
        this.currentPage = this.commentPages.length;
      } else if (result <= 1) {
        this.currentPage = 1;
      } else {
        if (result > 0) {
          this.currentPage = result;
        } else {
          this.currentPage = this.currentPage;
        }
      }
      for (let el in this.listOfComments) {
        for (let em in this.listOfComments[el]) {
          this.numberOC = this.listOfComments[el].slice(
            this.currentPage * 3 - 3,
            this.currentPage * 3
          );
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
          this.numberOC = this.listOfComments[el].slice(
            this.currentPage * 3 - 3,
            this.currentPage * 3
          );
        }
      }
    }
    for (let el in this.listOfComments) {
      for (let em in this.listOfComments[el]) {
        this.numberOC = this.listOfComments[el].slice(
          this.currentPage * 3 - 3,
          this.currentPage * 3
        );
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
          this.numberOC = this.listOfComments[el].slice(
            this.currentPage * 3 - 3,
            this.currentPage * 3
          );
        }
      }
    }
    for (let el in this.listOfComments) {
      for (let em in this.listOfComments[el]) {
        this.numberOC = this.listOfComments[el].slice(
          this.currentPage * 3 - 3,
          this.currentPage * 3
        );
      }
    }
  }
}
