import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {OffenceEventRegistry} from "../models/offence-event-registry";

@Injectable()
export class OffenceEventRegistryService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return OffenceEventRegistry;
  }

  getOffenceRegistryIdsByOffenceEvent(id){
    return new Promise((resolve,reject)=>{
      this.getEventsByDataElement("Program_Offence_Event",id).then((results)=>{
        let events = [];
        let relationDataElement = this.getDataElementByName("Program_Offence_Registry").id;
        results.events.forEach((event)=>{
          event.dataValues.forEach((dataValue)=>{
            if(dataValue.dataElement == relationDataElement){
              events.push(dataValue.value);
            }
          })
        })
        resolve(events);
      });
    })
  }

  getEvent(id){
    return new Promise((resolve,reject)=>{
      this.getEvent(id).then((event)=>{
        resolve(event);
      },(error)=>{
        console.log(error);
        reject(error);
      })
    })
  }
}
