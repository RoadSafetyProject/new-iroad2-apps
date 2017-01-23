import { Injectable } from '@angular/core';
import {OffenceRegistry} from "../models/offence-registry";
import {Http} from '@angular/http';
import {ProgramStageService} from "./program-stage.service";
import {OffenceEventRegistryService} from "./offence-event-registry.service";

@Injectable()
export class OffenceRegistryService extends ProgramStageService{

  constructor(protected http:Http,protected offenceEventRegistryService:OffenceEventRegistryService) {
    super(http)
  }
  getSchema():any {
    return OffenceRegistry;
  }

  getEventsByOffence(id){
    return this.offenceEventRegistryService.getOffenceRegistryIdsByOffenceEvent(id).then((results:Array<string>)=>{
      return this.getEvents({event :results.join(";")});
    });
    //return this.getEventsByDataElement("Program_Offence",id);
  }
}
