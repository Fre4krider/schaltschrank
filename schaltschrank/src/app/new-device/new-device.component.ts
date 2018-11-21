import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RackService } from '../rack.service';
import { Device } from '../device/device';
import { Rack } from '../rack/rack';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewDeviceDialogComponent } from '../new-device-dialog/new-device-dialog.component';
import { DeviceDataService } from '../device-data.service';
import { NewDeviceIdErrorDialogComponent } from '../new-device-id-error-dialog/new-device-id-error-dialog.component';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  @Output() deviceAddedEvent = new EventEmitter();

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
    private rackService: RackService, private deviceDataService: DeviceDataService, public spaceErrorDialog: MatDialog,
    public idErrorDialog: MatDialog, public newDeviceDialogRef: MatDialogRef<NewDeviceComponent>) { } //

  ngOnInit() {
  }

  /**
   * Creates a new Device and stores it inside the selected Rack
   */
  onAddDeviceSave(): void {
    let devicesAdded = false;
    this.selectedRack = this.rackService.getSelectedRack();
    if (this.idValidator.valid && this.heightValidator.valid && this.widthValidator.valid) {
        if (this.selectedRack.deviceList.findIndex(x => x.id === this.deviceID) === -1) {
            const device: Device = this.deviceDataService.newDevice(this.deviceID, this.deviceHeight, this.deviceWidth);
            devicesAdded = this.rackService.addDevice(device, this.selectedRack);
            if (!devicesAdded) {
              this.openNoSpaceErrorDialog();
            } else {
              this.deviceAddedEvent.emit();
        }
      } else {
        this.idErrorDialog.open(NewDeviceIdErrorDialogComponent);
      }
    }
  }

  /**
   * Closes the Input Form
   */
  onCancel(): void {
      this.newDeviceDialogRef.close();
  }

  openNoSpaceErrorDialog(): void {
    this.spaceErrorDialog.open(NewDeviceDialogComponent);
  }

  openIDErrorDialog(): void {
    this.spaceErrorDialog.open(NewDeviceDialogComponent);
  }
}
