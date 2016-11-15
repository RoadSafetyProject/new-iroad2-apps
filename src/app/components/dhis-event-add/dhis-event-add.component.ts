import { Component, OnInit, Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";
import {Location} from '@angular/common';

@Component({
  selector: 'dhis-event-add',
  templateUrl: './dhis-event-add.component.html',
  styleUrls: ['./dhis-event-add.component.css']
})
export class DhisEventAddComponent implements OnInit {

  @Input() programStage :ProgramStage;
  constructor(private location : Location) {

  }

  ngOnInit() {
    console.log(this.location)
  }

  cancel():void{
    console.log('cancel');
    this.location.back();
  }

  saveEvent():void{
    console.log('saving event');
  }


}
