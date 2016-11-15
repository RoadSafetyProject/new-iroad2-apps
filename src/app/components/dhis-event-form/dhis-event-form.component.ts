import { Component, OnInit,Input } from '@angular/core';
import {IProgramStage} from "../../models/program-stage";

@Component({
  selector: 'dhis-event-form',
  templateUrl: './dhis-event-form.component.html',
  styleUrls: ['./dhis-event-form.component.css']
})
export class DhisEventFormComponent implements OnInit {

  @Input() programStage :IProgramStage;

  constructor() { }

  ngOnInit() {
  }

}
