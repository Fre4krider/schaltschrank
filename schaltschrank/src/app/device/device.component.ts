import { Component, OnInit, Input } from '@angular/core';
import { Device } from './device';
import { Rack } from '../rack/rack';
import { NewDeviceComponent } from '../new-device/new-device.component';
import { MatDialog } from '@angular/material';
import { RackService } from '../rack.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  selectedRack: Rack;

  devices: Device[]; // Fill with devices of selected rack
  showDevices = false;
  constructor(private rackService: RackService, public newDeviceDialog: MatDialog) { }

  ngOnInit() {
  }

  addDeviceClick(): void {
    this.openNewDeviceDialog();
  }

  /**
   * Shows all Devices inside the rack
   */
  onShowDevices(): void {
    this.devices = this.rackService.getSelectedRack().getDevices();
    this.showDevices = true;
  }

    openNewDeviceDialog(): void {
    this.newDeviceDialog.open(NewDeviceComponent);
  }
}
