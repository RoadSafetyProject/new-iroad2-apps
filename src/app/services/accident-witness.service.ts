import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {AccidentWitness} from "../models/accident-witness";

@Injectable()
export class AccidentWitnessService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }

  getSchema():any {
    return AccidentWitness;
  }

}
