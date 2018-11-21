import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-rack-error-dialog',
  templateUrl: './new-rack-error-dialog.component.html',
  styleUrls: ['./new-rack-error-dialog.component.css']
})
export class NewRackErrorDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewRackErrorDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
