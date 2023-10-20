import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialogue',
  templateUrl: './mat-dialogue.component.html',
  styleUrls: ['./mat-dialogue.component.css']
})
export class MatDialogueComponent {

  constructor(public dialogRef: MatDialogRef<MatDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  onCancel(): void { 
    this.dialogRef.close(); 
  } 
}
