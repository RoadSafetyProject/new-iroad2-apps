import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {Offence} from "../models/offence";

@Injectable()
export class OffenceService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return Offence;
  }
  getEventsByVehicle(id){
    return this.getEventsByDataElement("Program_Vehicle",id);
  }
  getEventsByDriver(driverId){
    return this.getEventsByDataElement("Program_Driver",driverId);
  }
}
