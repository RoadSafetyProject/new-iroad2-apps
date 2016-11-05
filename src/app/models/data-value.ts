export interface IDataValue {
  dataElement:string;

  value:string;

  storedBy?:string;

  created?:string;

  lastUpdated?:string;

  providedElseWhere?:boolean;
}

export class DataValue implements IDataValue{

  dataElement:string;

  value:string;

  storedBy:string;

  created:string;

  lastUpdated:string;

  providedElseWhere:boolean;

  /**
   *
   * @param dataValue
   *
   */
  constructor(dataValue:IDataValue){
    this.dataElement = dataValue.dataElement;
    this.value = dataValue.value;

    if(dataValue.storedBy){
      this.storedBy = dataValue.storedBy;
    }
    if(dataValue.created){
      this.created = dataValue.created;
    }
    if(dataValue.lastUpdated){
      this.lastUpdated = dataValue.lastUpdated;
    }
    if(dataValue.providedElseWhere){
      this.providedElseWhere = dataValue.providedElseWhere;
    }
  }
}
