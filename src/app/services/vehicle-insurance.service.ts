import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {VehicleInsurance} from "../models/vehicle-insurance";

@Injectable()
export class VehicleInsuranceService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return VehicleInsurance;
  }
}
