import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RackService } from '../rack.service';
import { Device } from '../device/device';
import { Rack } from '../rack/rack';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewDeviceDialogComponent } from '../new-device-dialog/new-device-dialog.component';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  selectedRack: Rack;
  deviceID: string;
  deviceHeight: number;
  deviceWidth: number;
  idValidator = new FormControl('', [Validators.required]);
  heightValidator = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(30)
  ]);

  widthValidator = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(30)
  ]);
  constructor(
    private rackService: RackService, public errorDialog: MatDialog, public newDeviceDialogRef: MatDialogRef<NewDeviceComponent>) { } //

  ngOnInit() {
  }

  /**
   * Creates a new Device and stores it inside the selected Rack
   */
  onAddDeviceSave(): void {
    this.selectedRack = this.rackService.getSelectedRack();
    let deviceAdded = false;
    if (this.idValidator.valid && this.heightValidator.valid && this.widthValidator.valid) {
      const device: Device = new Device(this.deviceID, this.deviceHeight, this.deviceWidth);
      deviceAdded = this.rackService.addDevice(device, this.selectedRack);
      if (!deviceAdded) {
        this.openErrorDialog();
      }
    }
  }

  /**
   * Closes the Input Form
   */
  onCancel(): void {
      this.newDeviceDialogRef.close();
  }

  openErrorDialog(): void {
    this.errorDialog.open(NewDeviceDialogComponent);
  }
}
