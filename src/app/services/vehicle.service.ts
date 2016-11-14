import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {ProgramStageService} from "./program-stage.service";
import {Vehicle} from "../models/vehicle";
import {Event,IEventsWrapper} from "../models/event";

@Injectable()
export class VehicleService{
  vehicleProgram:Vehicle;
  vehicles:IEventsWrapper;
  constructor(private http:Http) {

  }
  getAll(){

  }
  getProgram(){
    return new Promise((resolve, reject) => {
      if(this.vehicleProgram){
        resolve(this.vehicleProgram);
      }else{
        this.http.get("api/programStages.json?fields=id,program,displayName,description,captureCoordinates,programStageDataElements[" +
          "dataElement[id,name,shortName,code,description,valueType,domainType,formName,aggregationType,optionset]" +
          ",displayInReports,compulsory,allowProvidedElseWhere,allowFutureDate,sortOrder]" +
          "&filter=program.name:eq:"
          + (new Vehicle()).getName()).subscribe((results) =>{
          this.vehicleProgram = new Vehicle(results.json().programStages[0]);
          resolve(this.vehicleProgram);
        })
      }
    });
  }
  getEvents(){
    return new Promise((resolve, reject) => {
      this.http.get("api/events.json?program=" + this.vehicleProgram.program.id).subscribe((results) =>{
        this.vehicles = results.json();
        resolve(this.vehicles);
      })
    });
  }
  get(id){
    return new Promise((resolve, reject) => {
      this.http.get("api/events/" + id+ ".json").subscribe((results) =>{
        resolve(results.json());
      })
    });
  }
}
