import { Component, OnInit, Input } from '@angular/core';
import { Device } from './device';
import { Rack } from '../rack/rack';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() selectedRack: Rack;

  addDeviceClicked = false;
  devices: Device[]; // Fill with devices of selected rack
  constructor() { }

  ngOnInit() {
    this.devices = this.selectedRack.getDevices();
  }

  addDeviceClick(): void {
    this.addDeviceClicked = true;
  }

  hideAddDeviceForm(value): void {
    this.addDeviceClicked = value;
  }
}
