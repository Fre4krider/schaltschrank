import { Injectable } from '@angular/core';
import { Device } from './device/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceDataService {

  constructor() { }

  newDevice (id: string, height: number, width: number): Device {
      const newDevice = new Device();
      newDevice.id = id;
      newDevice.height = height;
      newDevice.width = width;

      console.log('New Device ');
      console.log(newDevice);
      return newDevice;
  }

  setDevicePos(device: Device, x: number, y: number): void {
      device.xPos = x;
      device.yPos = y;
  }
}
