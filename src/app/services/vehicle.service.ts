import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Vehicle} from "../models/vehicle";

@Injectable()
export class VehicleService{

  constructor(private http:Http) {
    this.http.get("api/programs.json?filter=name:eq:" + (new Vehicle()).getName()).subscribe()
  }
  getAll(){

  }
}
