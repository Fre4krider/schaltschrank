import { Component, OnInit, Input } from '@angular/core';
import { Rack } from '../models/rack';

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.css']
})
export class RackComponent implements OnInit {

  @Input() selectedRack: Rack;

  constructor() { }

  ngOnInit() {
  }
}
