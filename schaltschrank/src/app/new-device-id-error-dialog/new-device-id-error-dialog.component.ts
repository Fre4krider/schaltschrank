import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-device-id-error-dialog',
  templateUrl: './new-device-id-error-dialog.component.html',
  styleUrls: ['./new-device-id-error-dialog.component.css']
})
export class NewDeviceIdErrorDialogComponent {

  constructor(public dialogRef: MatDialogRef<NewDeviceIdErrorDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
