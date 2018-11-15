import { Component, OnInit, Input } from '@angular/core';
import { Device } from './device';
import { Rack } from '../rack/rack';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  // TODO onShowDevices Bug;

  @Input() selectedRack: Rack;

  addDeviceClicked = false;
  devices: Device[]; // Fill with devices of selected rack
  showDevices = false;
  constructor() { }

  ngOnInit() {
  }

  addDeviceClick(): void {
    this.addDeviceClicked = true;
  }

  /**
   * Shows all Devices inside the rack
   */
  onShowDevices(): void {
    this.devices = this.selectedRack.getDevices();
    this.showDevices = true;
  }

  /**
   * Hides the Add Device Form
   * @param value boolean if button was clicked
   */
  hideAddDeviceForm(value): void {
    this.addDeviceClicked = value;
  }
}
