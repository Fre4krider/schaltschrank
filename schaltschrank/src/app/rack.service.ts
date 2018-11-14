import { Injectable } from '@angular/core';
import { Rack } from './rack/rack';
import { Device } from './device/device';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  racks: Rack[] = [];

  constructor() { }

  /**
   * Returns the Rack object inside the Racks Array
   * @param selectedRack the rack the user selected
   * @returns the rack object inside the array
   */
  private getRackinRacks(selectedRack: Rack): Rack {
    return this.racks[this.racks.indexOf(selectedRack)];
  }

  /**
   * Returns an Array with all racks saved
   * @returns an array with all racks
   */
  getRacks(): Rack[] {
    return this.racks;
  }

  /**
   * Returns all Devices inside a Rack
   * @param selectedRack the rack selected by the user
   * @returns a array with all Devices inside the Rack
   */
  getDevices(selectedRack: Rack): Device[] {
    return this.getRackinRacks(selectedRack).getDevices();
  }

  /**
   * Adds a Rack to the stack of Racks
   * @param rack the new rack
   */
  addRack(rack: Rack): void {
    this.racks.push(rack);
  }

  /**
   * Adds a new device to a rack
   * @param newDevice the new created device
   * @param selectedRack the target rack
   * @returns true if the device was sucessfully stored
   */
  addDevice(newDevice: Device, selectedRack: Rack): boolean {
    return this.getRackinRacks(selectedRack).storeDevice(newDevice);
  }

  /**
   * Deletes a rack from the Stack
   * @param selectedRack the rack to delete
   */
  deleteRack(selectedRack: Rack): void {
    const index = this.racks.indexOf(selectedRack);
    if (index > -1) {
      this.racks.splice(index, 1);
    }
  }
}
