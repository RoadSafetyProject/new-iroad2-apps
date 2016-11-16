import { Component, OnInit, Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";
import {Location} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'dhis-event-add',
  templateUrl: './dhis-event-add.component.html',
  styleUrls: ['./dhis-event-add.component.css']
})
export class DhisEventAddComponent implements OnInit {

  @Input() programStage:ProgramStage;

  private dataValuesObject:any;

  private showDatePicker:any;

  constructor(private location:Location) {
    this.showDatePicker = {};
    this.dataValuesObject = {};
  }

  ngOnInit() {
    console.log(this.programStage)
  }

  openDataPicker(dataElement) {
    if (this.showDatePicker[dataElement.id]) {
      this.closeDataPicker(dataElement);
    } else {
      this.showDatePicker[dataElement.id] = true;
    }
  }

  closeDataPicker(dataElement) {
    this.showDatePicker[dataElement.id] = false;
  }

  cancel():void {
    this.location.back();
  }

  saveEvent():void {
    console.log(this.dataValuesObject);
    console.log('saving event');
  }


}
