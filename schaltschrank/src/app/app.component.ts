import { Component, OnInit } from '@angular/core';
import { RackService } from './rack.service';
import { Rack } from './rack/rack';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Schaltschrank';
  addRackClicked = false;
  racks: Rack[];
  selectedRack: Rack;

  constructor(private rackService: RackService) { }

  ngOnInit() {
    this.getRacks();
  }

  /**
   * Gets all Racks via Service and saves them in the Component
   */
  getRacks(): void {
    this.racks = this.rackService.getRacks();
  }

  getSelectedRack(): Rack {
    return this.selectedRack;
  }

  /**
   * Stores a selected rack
   * @param rack the selected Rack
   */
  onSelect(rack: Rack): void {
    this.selectedRack = rack;
    console.log('Selected Rack: ' + this.selectedRack.id);
  }

  /**
   * Activates the new Rack Form
   */
  addRackClick(): void {
    this.addRackClicked = true;
  }

  deleteRack(rack: Rack): void {
    this.rackService.deleteRack(rack);
    this.selectedRack = undefined;
  }

  /**
   * Hides the Add new Rack Form after hitting the Save button
   * @param value boolean if the button was clicked
   */
  hideAddRackForm(value): void {
    this.addRackClicked = value;
  }
}
