import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {BusinessHistory} from "../models/business-history";

@Injectable()
export class BusinessHistoryService  extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return BusinessHistory;
  }
  getEventsByVehicle(id){
    return this.getEventsByDataElement("Program_Vehicle",id);
  }
}
