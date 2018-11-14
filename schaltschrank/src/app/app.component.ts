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

  getRacks(): void {
    this.racks = this.rackService.getRacks();
  }

  getSelectedRack(): Rack {
    return this.selectedRack;
  }

  onSelect(rack: Rack): void {
    this.selectedRack = rack;
    console.log('Selected Rack: ' + this.selectedRack.id);
  }

  addRackClick(): void {
    this.addRackClicked = true;
  }

  deleteRack(rack: Rack): void {
    this.rackService.deleteRack(rack);
    this.selectedRack = undefined;
  }

  hideAddRackForm(value): void {
    this.addRackClicked = value;
  }
}
