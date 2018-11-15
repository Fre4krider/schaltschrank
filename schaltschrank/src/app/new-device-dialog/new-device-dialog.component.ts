import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-device-dialog',
  templateUrl: './new-device-dialog.component.html',
  styleUrls: ['./new-device-dialog.component.css']
})
export class NewDeviceDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewDeviceDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
