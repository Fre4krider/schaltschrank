import { Injectable } from '@angular/core';
import { Device } from './device/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceDataService {

  constructor() { }

  /**
   * Creates a new Device object and returns it
   * @param id the device id
   * @param height the device height
   * @param width the device width
   */
  newDevice (id: string, height: number, width: number): Device {
      const newDevice = new Device();
      newDevice.id = id;
      newDevice.height = height;
      newDevice.width = width;

      console.log('New Device ');
      console.log(newDevice);
      return newDevice;
  }

  /**
   * Sets the Position of a Device inside a Rack
   * @param device the device
   * @param x the x coordinate (i)
   * @param y the y coordinate (j)
   */
  setDevicePos(device: Device, x: number, y: number): void {
      device.xPos = x;
      device.yPos = y;
  }
}
