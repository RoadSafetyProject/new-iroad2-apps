import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {VehicleLicenceHistory} from "../models/vehicle-licence-history";

@Injectable()
export class VehicleLicenceHistoryService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return VehicleLicenceHistory;
  }

}
