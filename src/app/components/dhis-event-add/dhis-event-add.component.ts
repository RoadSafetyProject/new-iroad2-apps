import { Component, OnInit, Input} from '@angular/core';
import {ProgramStage} from "../../models/program-stage";
import {Location} from '@angular/common';
import * as moment from 'moment';
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {DriverService} from "../../services/driver.service";
import {IEvent} from "../../models/event";
import {IProgramStageDataElement} from "../../models/program-stage-data-element";
import {IEventsWrapper} from "../../models/event";
import {IProgramStage} from "../../models/program-stage";

@Component({
  selector: 'dhis-event-add',
  templateUrl: './dhis-event-add.component.html',
  styleUrls: ['./dhis-event-add.component.css'],
  providers : [EventService]
})
export class DhisEventAddComponent implements OnInit {

  @Input() programStage:IProgramStage;
  @Input() relationDataElementValueObject : any;
  @Input() event : Event;
  @Input() redirectUrlOnSave : string;

  private dataValuesObject:any;
  private showDatePicker:any;
  private isLoadingData :boolean = true;
  private isFormInValid : boolean = false;
  private inValidFormFields :Array<string>;

  //todo validation fields using form builder directive
  //todo handling of files for example photo uploading
  //todo select 2 for normal select
  constructor(private location:Location,private eventService:EventService,private router: Router) {
    this.showDatePicker = {};
    this.dataValuesObject = {};
  }

  relations = {

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
        }else if(programStageDataElement.dataElement.valueType == 'TRACKER_ASSOCIATE'){
          this.relations[programStageDataElement.dataElement.id]= {
            loaded:false,
            program:programStageDataElement.dataElement.name.replace("Program_",""),
            options:[]
          }
        }
      });
    }
    if(this.event){
      this.event.dataValues.forEach((dataValue : any)=>{
        this.dataValuesObject[dataValue.dataElement]=dataValue.value;
      });
    }
    this.loadRelations().then(()=>{
      this.isLoadingData = false;
    });
  }

  loadRelations(){
    return new Promise((resolve,reject)=>{
      let promises = [];
      Object.keys(this.relations).forEach((key)=>{
        promises.push(this.populatEvents(key));
      })
      Promise.all(promises).then(()=>{
        resolve();
      },()=>{
        reject();
      })
    })
  }
  populatEvents(id){
    let service = this.eventService.getProgramService(this.relations[id].program);
    return new Promise((resolve,reject)=>{
      service.getProgram().then(programStage=>{
        service.getEvents().then((result:IEventsWrapper)=>{
          let primaryId = "";
          programStage.programStageDataElements.forEach((programStageDataElement:IProgramStageDataElement) =>{
            if(programStageDataElement.dataElement.code == "id_" + this.relations[id].program.toLowerCase()){
              primaryId =  programStageDataElement.dataElement.id;
            }
          })
          result.events.forEach((event:IEvent) =>{
            let option = {
              value: event.event,
              label:""
            }
            event.dataValues.forEach((dataValue) =>{
              if(dataValue.dataElement == primaryId){
                option.label = dataValue.value;
              }
            })
            if(option.label != ""){
              this.relations[id].options.push(option);
            }
          })
          this.relations[id].loaded = true;
          resolve();
        },()=>{
          reject();
        })
      },()=>{
        reject();
      })
    })
  }
  onSelectOpened(id) {
    this.relations[id].options.push({"value":"bl","label":"Betal"});
    this.relations[id].loaded = true;
    console.log('Select dropdown opened.');
  }

  onSelectClosed(id) {
    console.log('Select dropdown closed.');
  }

  onSelected(id,item) {
    this.dataValuesObject[id] = item.value;
    console.log('Selected: ' + item.value + ', ' + item.label);
  }

  onDeselected(item) {
    console.log('Deselected: ' + item.value + ', ' + item.label);
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

  redirect(eventId) :void{
    console.log(eventId);
    let url = this.redirectUrlOnSave.replace(':id',eventId);
    this.router.navigate([url]);
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
      this.eventService.saveOrUpdateEvent(this.dataValuesObject,this.programStage,this.event).then((responseData :any)=>{
        this.isLoadingData = false;
        let response = responseData.response;
        let eventId = (this.event && this.event.event) ?this.event.event : response.importSummaries[0].reference;
        console.log(response,eventId);
        if(this.redirectUrlOnSave && this.redirectUrlOnSave != null){
          this.redirect(eventId);
        }else{
          this.cancel();
        }
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
