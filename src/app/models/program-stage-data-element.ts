import {DataElement} from "./data-element";

export interface IProgramStageDataElement {
  dataElement:DataElement;
  displayInReports:boolean;
  compulsory:boolean;
  allowProvidedElseWhere:boolean;
  allowFutureDate:boolean;
  sortOrder:boolean;
}
/**
 * This is a program stage data element encapsulation of the dhis programStagedataElement object
 */
export class ProgramStageDataElement implements IProgramStageDataElement{
  dataElement:DataElement;
  displayInReports:boolean;
  compulsory:boolean;
  allowProvidedElseWhere:boolean;
  allowFutureDate:boolean;
  sortOrder:boolean;

  constructor(programStageDataElement:IProgramStageDataElement){
    this.dataElement = programStageDataElement.dataElement;
    this.displayInReports = programStageDataElement.displayInReports;
    this.compulsory = programStageDataElement.compulsory;
    this.allowProvidedElseWhere = programStageDataElement.allowProvidedElseWhere;
    this.allowFutureDate = programStageDataElement.allowFutureDate;
    this.sortOrder = programStageDataElement.sortOrder;
  }
}
