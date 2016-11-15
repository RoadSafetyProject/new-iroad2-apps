import { Component, OnInit,Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";

@Component({
  selector: 'app-dhis-event-update',
  templateUrl: './dhis-event-update.component.html',
  styleUrls: ['./dhis-event-update.component.css']
})
export class DhisEventUpdateComponent implements OnInit {

  @Input() programStage :ProgramStage;
  @Input () event : Event;

  constructor() { }

  ngOnInit() {
  }

}
