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
  private isLoadingData :boolean = true;
  private isFormInValid : boolean = false;
  private inValidFormFields :Array<string>;
  private selectedDates :any = {};

  //todo validation fields using form builder directive
  constructor(private location:Location,private eventService:EventService) {
    this.showDatePicker = {};
    this.dataValuesObject = {};
  }

  ngOnInit() {
    if(this.relationDataElementValueObject){
      this.dataValuesObject = this.relationDataElementValueObject;
    }
    this.programStage.programStageDataElements.forEach((programStageDataElement : any)=>{
      if(programStageDataElement.dataElement.optionSet){
        this.dataValuesObject[programStageDataElement.dataElement.id] = "";
      }
    });
    this.isLoadingData = false;
  }


  openOrCloseDataPicker(dataElement) {
    if(this.showDatePicker[dataElement.id]){
      this.showDatePicker[dataElement.id] = !this.showDatePicker[dataElement.id];
    }else{
      this.showDatePicker[dataElement.id] = true;
    }
  }

  closeDatePicker(dataElement,event){
    if(this.dataValuesObject[dataElement.id] != event.toString()){
      if(this.showDatePicker[dataElement.id]){
        this.dataValuesObject[dataElement.id] = new Date(event);
        this.showDatePicker[dataElement.id] = false;
      }
    }
  }

  cancel():void {
    this.location.back();
  }

  saveEvent():void {
    //todo validate for required fields using form builder directive
    let formValidationResult = this.getFormValidationResult(this.programStage.programStageDataElements,this.dataValuesObject);
    this.isFormInValid = !formValidationResult.isFormValid;
    this.inValidFormFields = formValidationResult.inValidFields;
    if(formValidationResult.isFormValid){
      this.isLoadingData = true;
      this.eventService.saveOrUpdateEvent(this.dataValuesObject,this.programStage,event).then(response=>{
        this.isLoadingData = false;
        this.cancel();
      },error=>{
        this.isLoadingData = false;
        console.log('ops error occurred ',error);
        this.cancel();
      }).catch(e=>{
        this.isLoadingData = false;
        console.log('ops exception occurred ',e);
        this.cancel();
      });
    }
  }

  getFormValidationResult(programStageDataElements,dataValuesObject){
    let formValidationResult = {
      isFormValid : true,
      inValidFields : []
    };
    programStageDataElements.forEach((programStageDataElement:any)=> {
      if (programStageDataElement.compulsory) {
        if (!dataValuesObject[programStageDataElement.dataElement.id] || dataValuesObject[programStageDataElement.dataElement.id] == "") {
          formValidationResult.isFormValid = false;
          formValidationResult.inValidFields.push(programStageDataElement.dataElement.name);
        }
      }
    });
    return formValidationResult;
  }


}
