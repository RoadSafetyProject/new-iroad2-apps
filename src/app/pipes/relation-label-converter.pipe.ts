import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relationLabelConverter'
})
export class RelationLabelConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let label = value;
    let labelToBeChecked = value.toLowerCase();
    if(labelToBeChecked.indexOf("program_") > -1){
      label = labelToBeChecked.split("program_")[1];
    }
    return label;
  }

}
