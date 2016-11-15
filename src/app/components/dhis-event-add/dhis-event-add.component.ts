import { Component, OnInit, Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";

@Component({
  selector: 'dhis-event-add',
  templateUrl: './dhis-event-add.component.html',
  styleUrls: ['./dhis-event-add.component.css']
})
export class DhisEventAddComponent implements OnInit {

  @Input() programStage :ProgramStage;
  constructor() {

  }

  ngOnInit() {
    console.log(this.programStage)
  }

}
