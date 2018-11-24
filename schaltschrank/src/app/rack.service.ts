import { Injectable } from '@angular/core';
import { Rack } from './rack/rack';
import { Device } from './device/device';
import { RackDataService } from './rack-data.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  RACKSTACK = 'rackStack';
  racks: Rack[] = [];
  private selectedRack: Rack;

  constructor(private rackDataService: RackDataService) { }

  private saveToLocalStorage(): void {

    if (typeof this.racks === 'object') {
      localStorage.setItem(this.RACKSTACK, JSON.stringify(this.racks));
    } else {
      localStorage.setItem(this.RACKSTACK, this.racks);
    }
  }

  private getFromLocalStorage(): any {
    const value: any = localStorage.getItem(this.RACKSTACK);

    if (value) {
        try {
          return JSON.parse(value);
        } catch (e) {
          return value;
        }
    } else {
      return [];
    }
  }

  getSelectedRack(): Rack {
    return this.selectedRack;
  }

  setSelectedRack(rack: Rack): void {
    this.selectedRack = rack;
  }

  /**
   * Returns the Rack object inside the Racks Array
   * @param selectedRack the rack the user selected
   * @returns the rack object inside the array
   */
  private getRackInRacks(selectedRack: Rack): Rack {
      return this.racks[this.racks.findIndex(x => x.id === selectedRack.id)];
  }

  /**
   * Returns an Array with all racks saved
   * @returns an array with all racks
   */
  getRacks(): Rack[] {
    this.racks = this.getFromLocalStorage();
    return this.racks;
  }

  /**
   * Returns all Devices inside a Rack
   * @param selectedRack the rack selected by the user
   * @returns a array with all Devices inside the Rack
   */
  getDevices(selectedRack: Rack): Device[] {
    return this.getRackInRacks(selectedRack).deviceList;
  }

  /**
   * Adds a Rack to the stack of Racks
   * @param rack the new rack
   */
  addRack(rack: Rack): void {
    this.racks.push(rack);
    this.saveToLocalStorage();
  }

  /**
   * Adds a new device to a rack
   * @param newDevice the new created device
   * @param selectedRack the target rack
   * @returns true if the device was sucessfully stored
   */
  addDevice(newDevice: Device, selectedRack: Rack): boolean {

    let deviceStored = false;
    deviceStored = this.rackDataService.storeDevice(this.getRackInRacks(selectedRack), newDevice);
    this.saveToLocalStorage();
    return deviceStored;
  }

  /**
   * Removes a Device from a selected Rack
   * @param device the device to remove
   */
  deleteDeviceFromRack(device: Device): void {
    this.rackDataService.deleteDevice(this.getRackInRacks(this.selectedRack), device);
    this.saveToLocalStorage();
  }

  /**
   * Deletes a rack from the Stack
   * @param selectedRack the rack to delete
   */
  deleteRack(selectedRack: Rack): void {
    const index = this.racks.indexOf(selectedRack);
    if (index > -1) {
      this.racks.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
}
