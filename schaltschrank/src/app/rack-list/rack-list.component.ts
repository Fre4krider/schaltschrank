import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Rack } from '../models/rack';
import { RackService } from '../services/rack.service';

@Component({
  selector: 'app-rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.css']
})
export class RackListComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  racks: Rack[];

  constructor(private rackService: RackService) { }

  ngOnInit() {
    this.racks = this.rackService.racks;
  }

  /**
   * Closes the Rack list view
   */
  onCancel(): void {
    this.valueChange.emit(false);
  }
}
