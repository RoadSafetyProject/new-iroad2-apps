import {OptionSet} from "./option-set";

export class IDataElement {
  id:string;
  name:string;
  shortName:string;
  code:string;
  description:string;
  valueType:string;
  domainType:string;
  formName:string;
  aggregationType:string;
  optionSet:OptionSet;
}
/**
 * This is a data element encapsulation of the dhis dataElement object
 */
export class DataElement implements IDataElement{
  id:string;
  name:string;
  shortName:string;
  code:string;
  description:string;
  valueType:string;
  domainType:string;
  formName:string;
  aggregationType:string;
  optionSet:OptionSet;

  constructor(dataElement:IDataElement){
    this.id = dataElement.id;
    this.name = dataElement.name;
    this.shortName = dataElement.shortName;
    this.code = dataElement.code;
    this.description = dataElement.description;
    this.valueType = dataElement.valueType;
    this.domainType = dataElement.domainType;
    this.formName = dataElement.formName;
    this.aggregationType = dataElement.aggregationType;
    this.optionSet = dataElement.optionSet;
  }

}
