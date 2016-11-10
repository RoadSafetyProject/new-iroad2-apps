import {ProgramStageDataElement} from "./program-stage-data-element";
import {IsModel} from "./is-model";

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
export abstract class ProgramStage implements IProgramStage,IsModel{
  id:string;
  displayName:string;
  description:string;
  captureCoordinates:boolean;
  programStageDataElements:Array<ProgramStageDataElement>;

  constructor(programStage?:IProgramStage){
    if(programStage){
      this.id = programStage.id;
      this.displayName = programStage.displayName;
      this.description = programStage.description;
      this.captureCoordinates = programStage.captureCoordinates;
      this.programStageDataElements = programStage.programStageDataElements;
    }
  }
  abstract getName():string;
}
