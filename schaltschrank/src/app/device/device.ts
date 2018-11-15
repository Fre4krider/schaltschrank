

export class Device {

    id: string;
    height: number;
    width: number;
    xPos: number;
    yPos: number;

    constructor (id?: string, height?: number, width?: number) {
        this.id = id;
        this.height = height;
        this.width = width;
    }

    setDevicePos(x: number, y: number): void {
        this.xPos = x;
        this.yPos = y;
    }
}
