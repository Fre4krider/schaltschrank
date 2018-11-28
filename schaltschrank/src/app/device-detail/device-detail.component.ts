import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewDeviceErrorDialogComponent } from '../new-device-error-dialog/new-device-error-dialog.component';

export interface DialogData {
  id: string;
  height: number;
  width: number;
  xPos: number;
  yPos: number;
}

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {


  constructor(public deviceDetailDialogRef: MatDialogRef<NewDeviceErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCancel(): void {
      this.deviceDetailDialogRef.close();
  }
}
