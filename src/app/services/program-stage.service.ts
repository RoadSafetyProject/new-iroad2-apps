import {ProgramStage} from "../models/program-stage";
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {IEventsWrapper} from "../models/event";

export abstract class ProgramStageService {

  constructor(protected http:Http) {

  }
  programStage:ProgramStage;

  abstract getSchema():any ;

  getProgram(){
    return new Promise((resolve, reject) => {
      if(this.programStage){
        resolve(this.programStage);
      }else{
        this.http.get("../../../api/programStages.json?fields=id,program,displayName,description,captureCoordinates,programStageDataElements[" +
          "dataElement[id,name,shortName,code,description,valueType,domainType,formName,aggregationType,optionSet[id,options[id,name,code]]]" +
          ",displayInReports,compulsory,allowProvidedElseWhere,allowFutureDate,sortOrder]" +
          "&filter=program.name:eq:"
          + (new (this.getSchema())()).getName()).subscribe((results) =>{
          this.programStage = new (this.getSchema())(results.json().programStages[0]);
          resolve(this.programStage);
        })
      }
    });
  }
  getEvents(additionalParams?){
    return new Promise((resolve, reject) => {
      let url = "../../../api/events.json?program=" + this.programStage.program.id;
      if(additionalParams){
        Object.keys(additionalParams).forEach((key) =>{
          url += "&" + key +"=" + additionalParams[key];
        })
      }
      this.http.get(url).subscribe((results) =>{
        resolve(results.json());
      })
    });
  }
  searchEvents(value,dataElementNames?){
    return new Promise((resolve, reject) => {
      this.http.get("../../../api/sqlViews.json?filter=name:eq:Search Event").subscribe((results) =>{
        let sqlViewResult = results.json();
        let dataElements = [];
        this.programStage.programStageDataElements.forEach((programStageDataElement) =>{
          if(dataElementNames){
            if(dataElementNames.indexOf(programStageDataElement.dataElement.name) > 0){
              dataElements.push(programStageDataElement.dataElement.id);
            }
          }else{
            dataElements.push(programStageDataElement.dataElement.id);
          }
        })
        console.log(dataElements.join(","));
        this.http.get("../../../api/sqlViews/" + sqlViewResult.sqlViews[0].id + "/data.json?var=dataElements:" + dataElements.join(" ") + "&var=value:" + value).subscribe((results) =>{
          let eventIDs = [];
          let queryResults = results.json();
          console.log("Query:",queryResults);
          queryResults.rows.forEach((row) =>{
            eventIDs.push(row[0]);
          });
          if (eventIDs.length == 0) {
            resolve({events:[],pager:{}});
          } else {
            this.getEvents("event="+eventIDs.join(";")).then((eventWrapper) => {
              resolve(eventWrapper);
            })
          }
        })
      })
    });
  }
  get(id){
    return new Promise((resolve, reject) => {
      this.http.get("../../../api/events/" + id+ ".json").subscribe((results) =>{
        resolve(results.json());
      })
    });
  }
  getEventsByDataElement(dataElementName,value){
    return new Promise((resolve, reject) => {
      this.http.get("../../../api/sqlViews.json?filter=name:eq:Find Event").subscribe((results) =>{
        let sqlViewResult = results.json();
        let dataElement = "";
        this.programStage.programStageDataElements.forEach((programStageDataElement) =>{
          if(programStageDataElement.dataElement.name == dataElementName){
            dataElement = programStageDataElement.dataElement.id;
          }
        })
        this.http.get("../../../api/sqlViews/" + sqlViewResult.sqlViews[0].id + "/data.json?var=dataElement:" + dataElement + "&var=value:" + value).subscribe((results) =>{
          let eventIDs = [];
          let queryResults = results.json();
          console.log("Query:",queryResults);
          queryResults.rows.forEach((row) =>{
            eventIDs.push(row[0]);
          });
          if (eventIDs.length == 0) {
            resolve({events:[],pager:{}});
          } else {
            this.getEvents("event="+eventIDs.join(";")).then((eventWrapper) => {
              resolve(eventWrapper);
            })
          }
        })
      })
    });
  }
}
