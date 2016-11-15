import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Vehicle} from "../models/vehicle";

@Injectable()
export class VehicleService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return Vehicle;
  }
}
