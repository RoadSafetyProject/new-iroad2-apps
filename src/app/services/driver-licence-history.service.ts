import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ProgramStageService} from "./program-stage.service";
import {DriverLicenceHistory} from "../models/driver-licence-history";

@Injectable()
export class DriverLicenceHistoryService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return DriverLicenceHistory;
  }

  getEventByDriver(driverId){
    let relationDataElement = "Program_Driver";
    return this.getEventsByDataElement(relationDataElement,driverId);
  }
}
