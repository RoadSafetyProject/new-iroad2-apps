import {DataValue} from "./data-value";
import {Coordinate} from "./coordinate";

export interface IEvent {
  program:string;
  programStage:string;
  orgUnit:string;
  dueDate:string;
  event?:string;
  status:string;
  eventDate:string;
  coordinate?:Coordinate
  lastUpdated:string;
  created:string;
  dataValues:Array<DataValue>
}

export class Event implements IEvent{
  program:string;
  programStage:string;
  orgUnit:string;
  dueDate:string;
  event:string;
  status:string;
  eventDate:string;
  coordinate:Coordinate;
  lastUpdated:string;
  created:string;
  dataValues:Array<DataValue>;

  constructor(event){
    this.program = event.program;
    this.programStage = event.programStage;
    this.orgUnit = event.orgUnit;
    this.dueDate = event.dueDate;
    this.status = event.status;
    this.eventDate = event.eventDate;
    this.lastUpdated = event.lastUpdated;
    this.created = event.created;
    this.dataValues = event.dataValues;
    if(event.event){
      this.event = event.event;
    }
    if(event.coordinate){
      this.coordinate = event.coordinate;
    }
  }

}
export interface IPager {
  page:number;
  pageCount:number;
  total:number;
  pageSize:number;
}
export interface IEventsWrapper {
  pager:IPager;
  events:Array<Event>;
}

