import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Device } from './device';
import { NewDeviceComponent } from '../new-device/new-device.component';
import { MatDialog } from '@angular/material';
import { RackService } from '../rack.service';
import { DeviceDetailComponent } from '../device-detail/device-detail.component';
import { Rack } from '../rack/rack';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit, OnChanges {

  @Input() selectedRack: Rack;
  devices: Device[];

  constructor(private rackService: RackService,
    public newDeviceDialog: MatDialog, public deviceDetailDialog: MatDialog) { }

  ngOnInit() {
    this.showDevices();
  }

  ngOnChanges() {
    this.showDevices();
  }

  /**
   * Opens a new Dialog to add a Device
   */
  addDeviceClick(): void {
    const dialogRef = this.newDeviceDialog.open(NewDeviceComponent);
    dialogRef.componentInstance.deviceAddedEvent.subscribe(() => {
      this.showDevices();
    });
  }

  /**
   * Removes a Device from a rack
   * @param device the device to remove
   */
  deleteDevice(device: Device): void {
    this.rackService.deleteDeviceFromRack(device);
    this.showDevices();
  }

  /**
   * Shows all Devices inside the rack
   */
  showDevices(): void {
    this.devices = this.rackService.getSelectedRack().deviceList;
  }

  /**
   * Opens a Dialog with the device details
   */
  onSelectDevice(device: Device): void {
    this.deviceDetailDialog.open(DeviceDetailComponent, {data:
      {id: device.id, height: device.height, width: device.width, xPos: device.xPos, yPos: device.yPos}});
  }
}
