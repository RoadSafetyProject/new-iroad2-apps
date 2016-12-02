import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {AccidentVehicle} from "../models/accident-vehicle";

@Injectable()
export class AccidentVehicleService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return AccidentVehicle;
  }

  getAccidentIdsByDriver(driverId){
    return new Promise((resolve, reject) => {
      let dataElementId = "";
      let accidentIds = [];
      this.programStage.programStageDataElements.forEach((programStageDataElement:any)=>{
        if(programStageDataElement.dataElement.name == "Program_Accident"){
          dataElementId = programStageDataElement.dataElement.id;
        }
      });
      this.getEventsByDataElement("Program_Driver",driverId).then((events:any)=>{
        events.events.forEach((event:any)=>{
          event.dataValues.forEach((dataValue:any)=>{
            if(dataValue.dataElement == dataElementId){
              accidentIds.push(dataValue.value);
            }
          })
        });
        resolve(accidentIds);
      },error=>{
        reject(error);
      })
    });
  }

  getAccidentIdsByVehicle(driverId){
    return new Promise((resolve, reject) => {
      let dataElementId = "";
      let accidentIds = [];
      this.programStage.programStageDataElements.forEach((programStageDataElement:any)=>{
        if(programStageDataElement.dataElement.name == "Program_Accident"){
          dataElementId = programStageDataElement.dataElement.id;
        }
      });
      this.getEventsByDataElement("Program_Vehicle",driverId).then((events:any)=>{
        events.events.forEach((event:any)=>{
          event.dataValues.forEach((dataValue:any)=>{
            if(dataValue.dataElement == dataElementId){
              accidentIds.push(dataValue.value);
            }
          })
        });
        resolve(accidentIds);
      },error=>{
        reject(error);
      })
    });
  }
}
