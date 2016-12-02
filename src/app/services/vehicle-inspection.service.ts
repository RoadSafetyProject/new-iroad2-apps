import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Http} from '@angular/http';
import {VehicleInspection} from "../models/vehicle-inspection";

@Injectable()
export class VehicleInspectionService extends ProgramStageService{

  constructor(protected http:Http) {
    super(http)
  }
  getSchema():any {
    return VehicleInspection;
  }
  getVehicleInspection(vehicleId){
    return new Promise((resolve, reject) => {
      this.getEventsByDataElement("Program_Vehicle",vehicleId).then((eventWrapper)=>{
        resolve(eventWrapper);
      },()=>{
        reject();
      })
    })
  }

}
