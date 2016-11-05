import {ProgramStageDataElement} from "./program-stage-data-element";

export interface IProgramStage {
  id:string;
  displayName:string;
  description:string;
  captureCoordinates:boolean;
  programStageDataElements:Array<ProgramStageDataElement>;
}

/**
 * This is a program stage encapsulation of the dhis programStage object
 */
export class ProgramStage implements IProgramStage{
  id:string;
  displayName:string;
  description:string;
  captureCoordinates:boolean;
  programStageDataElements:Array<ProgramStageDataElement>;

  constructor(programStage:IProgramStage){
    this.id = programStage.id;
    this.displayName = programStage.displayName;
    this.description = programStage.description;
    this.captureCoordinates = programStage.captureCoordinates;
    this.programStageDataElements = programStage.programStageDataElements;
  }
}
