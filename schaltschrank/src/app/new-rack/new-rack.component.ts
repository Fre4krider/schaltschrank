import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RackService } from '../rack.service';
import { Rack } from '../rack/rack';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-rack',
  templateUrl: './new-rack.component.html',
  styleUrls: ['./new-rack.component.css']
})
export class NewRackComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  rackID: string;
  rackHeight: number;
  rackWidth: number;
  idValidator = new FormControl('', [Validators.required]);
  heightValidator = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(50)
  ]);

  widthValidator = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(30)
  ]);

  constructor(private rackService: RackService) {}

  ngOnInit() {
  }

  /**
   * Adds a new Rack
   */
  onAddRack(): void {
    if (this.idValidator.valid && this.heightValidator.valid && this.widthValidator.valid) {
      const rack: Rack = new Rack(this.rackID, this.rackHeight, this.rackWidth);
      this.valueChange.emit(false);
      this.rackService.addRack(rack);
    }
  }

  /**
   * Closes the Input Form
   */
  onCancel(): void {
      this.valueChange.emit(false);
  }
}
