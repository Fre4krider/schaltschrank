import { Injectable } from '@angular/core';
import { Rack } from './rack/rack';
import { Device } from './device/device';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  racks: Rack[] = [];

  constructor() { }

  private getRackinRacks(selectedRack: Rack): Rack {
    return this.racks[this.racks.indexOf(selectedRack)];
  }

  getRacks(): Rack[] {
    return this.racks;
  }

  getDevices(selectedRack: Rack): Device[] {
    return this.getRackinRacks(selectedRack).getDevices();
  }

  addRack(rack: Rack): void {
    this.racks.push(rack);
  }

  addDevice(newDevice: Device, selectedRack: Rack): boolean {
    return this.getRackinRacks(selectedRack).storeDevice(newDevice);
  }

  deleteRack(selectedRack: Rack): void {
    const index = this.racks.indexOf(selectedRack);
    if (index > -1) {
      this.racks.splice(index, 1);
    }
  }
}
