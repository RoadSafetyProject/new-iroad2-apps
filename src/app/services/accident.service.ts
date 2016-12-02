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

  getAccientsByIds(accidentIds){
    alert(accidentIds);
  }

  getEventsByVehicle(id){
    return this.getEventsByDataElement("Program_Vehicle",id);
  }

}
