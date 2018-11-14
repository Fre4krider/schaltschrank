import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RackService } from '../rack.service';
import { Device } from '../device/device';
import { Rack } from '../rack/rack';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Input() selectedRack: Rack;

  deviceID: string;
  deviceHeight: number;
  deviceWidth: number;
  idValidator = new FormControl('', [Validators.required]);
  heightValidator = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(30)
  ]);

  widthValidator = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(30)
  ]);
  constructor(private rackService: RackService) { }

  ngOnInit() {
  }

  onAddDevice(): void {
    if (this.idValidator.valid && this.heightValidator.valid && this.widthValidator.valid) {
      const device: Device = new Device(this.deviceID, this.deviceHeight, this.deviceWidth);
      this.valueChange.emit(false);
      this.rackService.addDevice(device, this.selectedRack);
    }
  }

  onCancel(): void {
      this.valueChange.emit(false);
  }

}
