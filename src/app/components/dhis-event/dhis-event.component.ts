import { Component, OnInit ,Input} from '@angular/core';
import {IEvent} from "../../models/event";
import {IProgramStage} from "../../models/program-stage";
import {OrderByPipe} from "../../pipes/order-by.pipe";

@Component({
  selector: 'dhis-event',
  templateUrl: './dhis-event.component.html',
  styleUrls: ['./dhis-event.component.css'],
  //pipes: [OrderByPipe]
})
export class DhisEventComponent implements OnInit {

  @Input() event :IEvent;
  @Input() programStage :IProgramStage;
  constructor() { }

  ngOnInit() {

  }

}
