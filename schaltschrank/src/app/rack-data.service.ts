import { Injectable } from '@angular/core';
import { Rack } from './rack/rack';
import { Device } from './device/device';
import { DeviceDataService } from './device-data.service';

@Injectable({
  providedIn: 'root'
})
export class RackDataService {

  constructor(private deviceDataService: DeviceDataService) { }

  /**
   * Creates a new Rack and returns it like the constructor did
   * @param id The ID of the Rack
   * @param height the Height of the Rack
   * @param width The Width of the Rack
   */
  newRack(id: string, height: number, width: number): Rack {
      const newRack = new Rack();
      newRack.id = id;
      newRack.height = height;
      newRack.width = width;
      newRack.devices = [];

      for (let i = 0; i < width; i++) {
          newRack.devices[i] = [];
          for (let j = 0; j < height; j++) {
              newRack.devices[i][j] = null;
          }
      }
      return newRack;
  }

/**
 * Gets all devices and returns them in an array
 * @param rack the rack you want the devices from
 */
  getDevices(rack: Rack): Device[] {

      const deviceList = [];

      for (let i = 0; i < rack.devices.length; i++) {
          for (let j = 0; j < rack.devices[i].length; j++) {
              if (!deviceList.includes(rack.devices[i][j]) && rack.devices[i][j] !== null) {
                  deviceList.push(rack.devices[i][j]);
              }
          }
      }

      return deviceList;
  }

  /** Stores a new Device
   * @param newDevice the new device
   * @param rack the rack to store the device in
   * @returns true if the device was stored
   */
  storeDevice(rack: Rack, newDevice: Device): boolean {

      let deviceStored = false;
      const devicePos = this.findDeviceSlot(rack, newDevice);

      this.deviceDataService.setDevicePos(newDevice, devicePos[0][0], devicePos[0][1]);
      if (devicePos.length !== 0) {
              for (let i = 0; i < devicePos.length; i++) {
                      const collumn = devicePos[i];
                      rack.devices[collumn[0]][collumn[1]] = newDevice;
              }
              deviceStored = true;
      }
      return deviceStored;
      }

  /**
   * Searches for a free Slot for the new device in a rack
   * @param newDevice the new device
   * @param rack the rack
   * @returns A 2-dimensional Array with coordinates of the free Slot ([x,y],[x,y])
   */
  private findDeviceSlot(rack: Rack, newDevice: Device): number[][] {
    let devicePos: number[][];
    let y = 0;
    let freeCollumnHeight = 0;
    let freeSlotWidth = 0;
    let slotFound = false;
    devicePos = [];

      while (!slotFound) {
          for (let i = 0, j = y; i < rack.devices.length; i++) {
                  if (rack.devices[i][j] === null) {
                              for (j = y; j < rack.devices[i].length; j++) {
                                  if (rack.devices[i][j] === null) {
                                      freeCollumnHeight++;
                                      devicePos.push([i, j]);
                                      if (freeCollumnHeight === newDevice.height) {
                                          break;
                                      }
                                  } else {
                                      freeCollumnHeight = 0;
                                      freeSlotWidth = 0;
                                      devicePos = [];
                                      break;
                                  }
                              }
                      freeSlotWidth++;
                      if (freeSlotWidth === newDevice.width && freeCollumnHeight === newDevice.height) {
                          slotFound = true;
                          break;
                      }
                      freeCollumnHeight = 0;
                  }
          }
          if (freeSlotWidth !== newDevice.width && freeCollumnHeight !== newDevice.height) {
              freeCollumnHeight = 0;
              freeSlotWidth = 0;
              devicePos = [];
              y++;
              if (y > newDevice.height) {
                  break;
              }
          }
      }
  return devicePos;
  }

  deleteDevice(rack: Rack, device: Device): void {
      for (let i = 0; i < rack.devices.length; i++) {
          for (let j = 0; j < rack.devices[i].length; j++) {
              if (rack.devices[i][j] === device && rack.devices[i][j] !== null) {
                  rack.devices[i][j] = null;
              }
          }
      }
  }
}
