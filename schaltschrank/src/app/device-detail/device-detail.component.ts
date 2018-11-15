import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewDeviceDialogComponent } from '../new-device-dialog/new-device-dialog.component';

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


  constructor(public deviceDetailDialogRef: MatDialogRef<NewDeviceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCancel(): void {
      this.deviceDetailDialogRef.close();
  }
}
