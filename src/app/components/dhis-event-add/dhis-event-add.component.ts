import { Component, OnInit, Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";
import {Location} from '@angular/common';
import * as moment from 'moment';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'dhis-event-add',
  templateUrl: './dhis-event-add.component.html',
  styleUrls: ['./dhis-event-add.component.css'],
  providers : [EventService]
})
export class DhisEventAddComponent implements OnInit {

  @Input() programStage:ProgramStage;
  @Input() relationDataElementValueObject : any;

  private dataValuesObject:any;
  private showDatePicker:any;

  constructor(private location:Location,private eventService:EventService) {
    this.showDatePicker = {};
    this.dataValuesObject = {};
  }

  ngOnInit() {
    if(this.relationDataElementValueObject){
      this.dataValuesObject = this.relationDataElementValueObject;
    }
  }

  openOrCloseDataPicker(dataElement) {
    if (this.showDatePicker[dataElement.id]) {
      this.showDatePicker[dataElement.id] = false;
    } else {
      this.showDatePicker[dataElement.id] = true;
    }
  }

  cancel():void {
    this.location.back();
  }

  saveEvent():void {
    this.eventService.saveOrUpdateEvent(this.dataValuesObject,this.programStage,event).then(response=>{
      console.log(JSON.stringify(response));
      console.log('Success save event');
      console.log('ready to return to back');
      this.cancel();
    },error=>{
      console.log('ops error occurred ',error);
    }).catch(e=>{
      console.log('ops exception occurred ',e);
    });
  }


}
