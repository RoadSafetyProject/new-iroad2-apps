import { Pipe, PipeTransform } from '@angular/core';
import {IProgramStageDataElement} from "../../models/program-stage-data-element";
import {IEvent} from "../../models/event";

@Pipe({
  name: 'extractDataValue'
})
export class ExtractDataValuePipe implements PipeTransform {

  transform(event: IEvent, programStageDataElement: IProgramStageDataElement): any {
    let value = "";
    event.dataValues.forEach((dataValue) =>{
      if(dataValue.dataElement == programStageDataElement.dataElement.id){
        value = dataValue.value
      }
    })
    return value;
  }

}
