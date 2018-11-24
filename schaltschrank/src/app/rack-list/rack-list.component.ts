import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Rack } from '../rack/rack';
import { RackService } from '../rack.service';

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

  onCancel(): void {
    this.valueChange.emit(false);
  }
}
