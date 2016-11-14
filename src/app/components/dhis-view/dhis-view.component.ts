import { Component, OnInit,Input } from '@angular/core';
import {IEvent} from "../../models/event";
import {IDataElement} from "../../models/data-element";

@Component({
  selector: 'dhis-view',
  templateUrl: './dhis-view.component.html',
  styleUrls: ['./dhis-view.component.css']
})
export class DhisViewComponent implements OnInit {

  @Input() event :IEvent;
  @Input() dataElement :IDataElement;

  constructor() { }

  ngOnInit() {
  }

}
