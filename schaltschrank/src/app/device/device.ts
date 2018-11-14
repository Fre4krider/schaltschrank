

export class Device {

    id: string;
    height: number;
    width: number;

    constructor (id?: string, height?: number, width?: number) {
        this.id = id;
        this.height = height;
        this.width = width;
    }
}
