import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ProgramStage} from "../models/program-stage";
import {IEvent,Event} from "../models/event";
import {DataValue} from "../models/data-value";

@Injectable()
export class EventService {

  constructor(private http : Http) {
  }


  /**
   *
   * @param dataValuesObject
   * @param programStage
   * @param event
   * @returns {Promise<T>}
     */
  saveOrUpdateEvent(dataValuesObject, programStage, event) {
    let self = this;
    if (event.event) {
      //update event
      event.dataValue = this.getDataValues(dataValuesObject,programStage.programStageDataElements);
      return new Promise((resolve, reject) => {
        self.putEvent(new Event(event)).then(response=>{
          resolve(response)
        },error=>{
          reject(error);
        }).catch(e=>{
          reject(e);
        });
      })
    } else {
      //create new event
      let eventData = {
        program: programStage.program.id,
        programStage: programStage.id,
        orgUnit: "",
        dueDate: new Date().toISOString(),
        status: "ACTIVE",
        eventDate: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        created: new Date().toISOString(),
        dataValues: this.getDataValues(dataValuesObject,programStage.programStageDataElements)
      };
      return new Promise((resolve, reject) => {
        self.http.get("api/me.json?fields=organisationUnits").subscribe(orgUnitRespense=>{
          orgUnitRespense = orgUnitRespense.json();
          self.postEvent(new Event(eventData),orgUnitRespense).then(response=>{
            resolve(response)
          },error=>{
            reject(error);
          }).catch(e=>{
            reject(e);
          });
        },error=>{
          //fail to get organisationUnit
          reject(error);
        })
      })
    }
  }

  /**
   *
   * @param dataValuesObject
   * @param programStageDataElements
     */
  getDataValues(dataValuesObject,programStageDataElements){
    let dataValues : Array<DataValue> = [];
    programStageDataElements.forEach((programStageDataElement : any)=>{
      let dataElementId = programStageDataElement.dataElement.id;
      if(dataValuesObject[dataElementId]){
        let value = dataValuesObject[dataElementId];
        //formation date values to dhis 2 support date type
        if(programStageDataElement.dataElement.valueType == "DATE"){
          let dateObject = new Date(value);
          let month = dateObject.getMonth() + 1;
          let date  = dateObject.getDate();
          value = dateObject.getFullYear() + "-" + (month > 9?month : "0"+month)+ "-"+(date > 9?date :"0"+date);
        }
        dataValues.push(new DataValue({dataElement : dataElementId,value : value}));
      }
    });
    return dataValues;
  }


  putEvent(event){
    let self = this;
    return new Promise((resolve, reject) => {
      self.http.put("api/events/"+event.event,event).subscribe(response=>{
        resolve(response.json());
      },error=>{
        reject(error);
      });
    });
  }

  postEvent(event,orgUnitRespense){
    let self = this;
    return new Promise((resolve, reject) => {
      event.orgUnit = orgUnitRespense.organisationUnits[0].id;
      self.http.post("api/events.json",event).subscribe(response=>{
        resolve(response.json());
      },error=>{
        reject(error);
      })
    });
  }

  deleteEvent(event){
    let self = this;
    return new Promise((resolve, reject) => {
      self.http.delete("api/events/"+event.event).subscribe(response=>{
        resolve(response.json());
      },error=>{
        reject(error);
      });
    });
  }

}
