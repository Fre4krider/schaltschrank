import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-error-device-dialog',
  templateUrl: './new-device-error-dialog.component.html',
  styleUrls: ['./new-device-error-dialog.component.css']
})
export class NewDeviceErrorDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewDeviceErrorDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
