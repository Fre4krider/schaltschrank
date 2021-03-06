import { Component, OnInit} from '@angular/core';
import { RackService } from './services/rack.service';
import { Rack } from './models/rack';
import { NewRackComponent } from './new-rack/new-rack.component';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Schaltschrank';
  addRackClicked = false;
  rackListClicked = false;
  racks: Rack[];
  selectedRack: Rack;

  constructor(private rackService: RackService, public newRackDialog: MatDialog) { }

  ngOnInit() {
      this.getRacks();
  }

  /**
   * Gets all Racks via Service and saves them in the Component
   */
  private getRacks(): void {
    this.racks = this.rackService.getRacks();
  }

  /**
   * Stores the selected rack so services have access to it
   * @param rack the selected Rack
   */
  onSelect(rack: Rack): void {
    this.rackService.setSelectedRack(rack);
    this.selectedRack = rack;
  }

  /**
   * Removes the Rack the User clicked on
   */
  onDeleteRack(rack: Rack): void {
    this.rackService.deleteRack(rack);
    this.rackService.setSelectedRack(undefined);
    this.selectedRack = undefined;
  }

  /**
   * Hides the Add new Rack Form after hitting the Save or Cancel button
   * Gets triggered by EventEmitter
   * @param value boolean provided by the valueChanged variable in the HTML Template
   */
  hideAddRackForm(value): void {
    this.addRackClicked = value;
  }

  /**
   * Opens a DIalog to add a new Rack
   */
  onOpenNewRackDialog(): void {
    this.newRackDialog.open(NewRackComponent);
  }

  /**
   * Opens the Listview of all Racks
   */
  onRackListClick(): void {
    this.rackListClicked = true;
  }

  /**
   * Called if onCancel was clicked on the RackList Form
   * @param value boolean
   */
  hideRackList(value): void {
    this.rackListClicked = value;
  }
}
