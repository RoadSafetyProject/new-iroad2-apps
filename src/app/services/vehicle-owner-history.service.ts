import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {VehicleOwnerHistory} from "../models/vehicle-owner-history";

@Injectable()
export class VehicleOwnerHistoryService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return VehicleOwnerHistory;
  }

}
