
import { Device } from '../device/device';

export class Rack {


    id: string;
    height: number;
    width: number;
    private devices: Device[][];

    constructor(id: string, height: number, width: number) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.devices = [];

        for (let i = 0; i < width; i++) {
            this.devices[i] = [];
            for (let j = 0; j < height; j++) {
                this.devices[i][j] = null;
            }
        }
    }

    /** Gets all devices of the rack
     * @returns An Array with all Devices
    */
    getDevices(): Device[] {

        let deviceList = [];

        for (let i = 0; i < this.devices.length; i++) {
            for (let j = 0; this.devices[i].length; j++) {
                if (!deviceList.includes(this.devices[i][j]) && this.devices[i][j] !== null) {
                    deviceList.push(this.devices[i][j]);
                }
            }
        }

        return deviceList;
    }

    /** Stores a new Device
     * @returns true if the device was stored
     */
    storeDevice(newDevice: Device): boolean {

        let deviceStored = false;
        const devicePos = this.findDeviceSlot(newDevice);

        if (devicePos.length !== 0) {
                for (let i = 0; i < devicePos.length; i++) {
                        const collumn = devicePos[i];
                        this.devices[collumn[0]][collumn[1]] = newDevice;
                }
                deviceStored = true;
        }
        return deviceStored;
        }

    private findDeviceSlot(newDevice: Device): number[][] {
    let devicePos: number[][];
    let y = 0;
    let freeCollumnHeight = 0;
    let freeSlotWidth = 0;
    let slotFound = false;
    devicePos = [];

    if (newDevice.width < newDevice.height) {

    } else {
            while (!slotFound) {
                for (let i = 0, j = y; i < this.devices.length; i++) {
                        if (this.devices[i][j] === null) {
                                    for (j = y; j < this.devices[i].length; j++) {
                                        if (this.devices[i][j] === null) {
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
    }
    return devicePos;
    }

    deleteDevice(): void {
       // this.devices.filter();
    }
}
