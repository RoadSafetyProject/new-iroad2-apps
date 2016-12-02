import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {Accident} from "../models/accident";

@Injectable()
export class AccidentService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return Accident;
  }

  getAccidentsByIds(accidentIds){
    return new Promise((resolve, reject) => {
      this.getEvents({event :accidentIds.join(";")}).then((eventWrapper:any) => {
        resolve(eventWrapper);
      },error=>{
        reject(error);
      });
    });
  }

  getEventsByVehicle(id){
    return this.getEventsByDataElement("Program_Vehicle",id);
  }

}
