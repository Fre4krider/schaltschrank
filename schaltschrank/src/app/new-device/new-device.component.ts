import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RackService } from '../services/rack.service';
import { Device } from '../models/device';
import { Rack } from '../models/rack';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewDeviceErrorDialogComponent } from '../new-device-error-dialog/new-device-error-dialog.component';
import { DeviceDataService } from '../services/device-data.service';
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
    public idErrorDialog: MatDialog, public newDeviceDialogRef: MatDialogRef<NewDeviceComponent>) { }

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
        this.openIDErrorDialog();
      }
    }
  }

  /**
   * Closes the Input Form
   */
  onCancel(): void {
      this.newDeviceDialogRef.close();
  }

  /**
   * Opens a Error Dialog if there is no space left in the rack
   */
  openNoSpaceErrorDialog(): void {
    this.spaceErrorDialog.open(NewDeviceErrorDialogComponent);
  }

  /**
   * Opens a Error Dialog if the ID of the device is already in use
   */
  openIDErrorDialog(): void {
    this.idErrorDialog.open(NewDeviceIdErrorDialogComponent);
  }
}
