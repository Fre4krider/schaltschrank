import { Component, OnInit } from '@angular/core';
import { RackService } from '../rack.service';
import {RackDataService } from '../rack-data.service';
import { Rack } from '../rack/rack';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NewRackErrorDialogComponent } from '../new-rack-error-dialog/new-rack-error-dialog.component';

@Component({
  selector: 'app-new-rack',
  templateUrl: './new-rack.component.html',
  styleUrls: ['./new-rack.component.css']
})
export class NewRackComponent implements OnInit {

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

  constructor(private rackService: RackService, private rackDataService: RackDataService,
    public newRackDialogRef: MatDialogRef<NewRackComponent>, public rackIdErrorDialog: MatDialog) {}

  ngOnInit() {
  }

  /**
   * Adds a new Rack after the Save Button was clicked
   */
  onAddRackSave(): void {
    if (this.idValidator.valid && this.heightValidator.valid && this.widthValidator.valid) {
      if (this.rackService.racks.findIndex(x => x.id === this.rackID) === -1) {
          const rack: Rack = this.rackDataService.newRack(this.rackID, this.rackHeight, this.rackWidth);
          this.rackService.addRack(rack);
      } else {
        this.rackIdErrorDialog.open(NewRackErrorDialogComponent);
      }
    }
  }

  /**
   * Closes the Input Form
   */
  onCancel(): void {
      this.newRackDialogRef.close();
  }
}
