import { Component, OnInit } from '@angular/core';
import { Device } from './device';
import { Rack } from '../rack/rack';
import { NewDeviceComponent } from '../new-device/new-device.component';
import { MatDialog } from '@angular/material';
import { RackService } from '../rack.service';
import { DeviceDetailComponent } from '../device-detail/device-detail.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  selectedRack: Rack;
  devices: Device[];
  selectedDevice: Device;

  constructor(private rackService: RackService, public newDeviceDialog: MatDialog, public deviceDetailDialog: MatDialog) { }

  ngOnInit() {
  }

  addDeviceClick(): void {
    this.openNewDeviceDialog();
  }

  deleteDevice(device: Device): void {
    this.rackService.deleteDeviceFromRack(device);
    this.showDevices();
  }

  /**
   * Shows all Devices inside the rack
   */
  showDevices(): void {
    this.devices = this.rackService.getSelectedRack().getDevices();
  }

  openNewDeviceDialog(): void {
    const dialogRef = this.newDeviceDialog.open(NewDeviceComponent);
    dialogRef.componentInstance.deviceAddedEvent.subscribe(() => {
      this.showDevices();
    })
  }

  onSelectDevice(device: Device): void {
    this.deviceDetailDialog.open(DeviceDetailComponent, {data:
      {id: device.id, height: device.height, width: device.width, xPos: device.xPos, yPos: device.yPos}});
  }
}
