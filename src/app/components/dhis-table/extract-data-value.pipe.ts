import { Pipe, PipeTransform } from '@angular/core';
import {IEvent} from "../../models/event";
import {IDataElement} from "../../models/data-element";

@Pipe({
  name: 'extractDataValue'
})
export class ExtractDataValuePipe implements PipeTransform {

  transform(event: IEvent, dataElement: IDataElement): any {
    let value = "";
    event.dataValues.forEach((dataValue) =>{
      if(dataValue.dataElement == dataElement.id){
        value = dataValue.value
      }
    });
    return value;
  }

}
