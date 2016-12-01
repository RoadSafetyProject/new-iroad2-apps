import { Component, OnInit, Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";
import {Location} from '@angular/common';
import * as moment from 'moment';
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event";

@Component({
  selector: 'dhis-event-add',
  templateUrl: './dhis-event-add.component.html',
  styleUrls: ['./dhis-event-add.component.css'],
  providers : [EventService]
})
export class DhisEventAddComponent implements OnInit {

  @Input() programStage:ProgramStage;
  @Input() relationDataElementValueObject : any;
  @Input() event : Event;

  private dataValuesObject:any;
  private showDatePicker:any;
  private isLoadingData :boolean = true;
  private isFormInValid : boolean = false;
  private inValidFormFields :Array<string>;

  //todo validation fields using form builder directive
  //todo handling of files for example photo uploading
  constructor(private location:Location,private eventService:EventService) {
    this.showDatePicker = {};
    this.dataValuesObject = {};
  }

  ngOnInit() {
    if(this.relationDataElementValueObject){
      this.dataValuesObject = this.relationDataElementValueObject;
    }
    if(this.programStage){
      this.programStage.programStageDataElements.forEach((programStageDataElement : any)=>{
        if(programStageDataElement.dataElement.optionSet){
          this.dataValuesObject[programStageDataElement.dataElement.id] = "";
        }else if(programStageDataElement.dataElement.valueType == 'BOOLEAN'){
          this.dataValuesObject[programStageDataElement.dataElement.id] = "";
        }else if(programStageDataElement.dataElement.valueType == 'TRUE_ONLY'){
          this.dataValuesObject[programStageDataElement.dataElement.id] = "";
        }
      });
    }
    if(this.event){
      this.event.dataValues.forEach((dataValue : any)=>{
        this.dataValuesObject[dataValue.dataElement]=dataValue.value;
      });
    }
    this.isLoadingData = false;
  }


  /**
   * toggle date picker
   * @param dataElement
     */
  openOrCloseDataPicker(dataElement) {
    if(this.showDatePicker[dataElement.id]){
      this.showDatePicker[dataElement.id] = !this.showDatePicker[dataElement.id];
    }else{
      this.showDatePicker[dataElement.id] = true;
    }
  }

  /**
   * close date picker if user select date
   * @param dataElement
   * @param event
     */
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

  /**
   * trigger saving action for form
   */
  saveEvent():void {
    //todo validate for required fields using form builder directive
    let formValidationResult = this.getFormValidationResult(this.programStage.programStageDataElements,this.dataValuesObject);
    this.isFormInValid = !formValidationResult.isFormValid;
    this.inValidFormFields = formValidationResult.inValidFields;

    //checking whether form is valid or not for submission process
    if(formValidationResult.isFormValid){
      this.isLoadingData = true;
      this.eventService.saveOrUpdateEvent(this.dataValuesObject,this.programStage,this.event).then(response=>{
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

  /**
   * get validation results
   * @param programStageDataElements
   * @param dataValuesObject
   * @returns {{isFormValid: boolean, inValidFields: Array}}
     */
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
