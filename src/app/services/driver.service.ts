import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ProgramStageService} from "./program-stage.service";
import {Driver} from "../models/driver";

@Injectable()
export class DriverService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return Driver;
  }

}
