import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Insurance} from "../models/insurance";

@Injectable()
export class InsuranceService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return Insurance;
  }
}
