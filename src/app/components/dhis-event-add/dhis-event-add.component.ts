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
  constructor(private loacation : Location) {

  }

  ngOnInit() {
    console.log(this.programStage)
  }

  cancel():void{
    console.log('cancel');
    this.loacation.back();
  }

  saveEvent():void{
    console.log('saving event');
  }


}
