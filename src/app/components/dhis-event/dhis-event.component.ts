import { Component, OnInit ,Input} from '@angular/core';
import {IEvent} from "../../models/event";
import {IProgramStage} from "../../models/program-stage";

@Component({
  selector: 'dhis-event',
  templateUrl: './dhis-event.component.html',
  styleUrls: ['./dhis-event.component.css']
})
export class DhisEventComponent implements OnInit {

  @Input() event :IEvent;
  @Input() programStage :IProgramStage;
  constructor() { }

  ngOnInit() {

  }

}
