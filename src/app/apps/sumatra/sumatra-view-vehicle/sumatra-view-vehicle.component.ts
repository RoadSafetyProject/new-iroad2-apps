import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../services/vehicle.service";
import {BusinessHistoryService} from "../../../services/business-history.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {IEventsWrapper} from "../../../models/event";
import {IProgramStage} from "../../../models/program-stage";

@Component({
  selector: 'app-sumatra-view-vehicle',
  templateUrl: './sumatra-view-vehicle.component.html',
  styleUrls: ['./sumatra-view-vehicle.component.css'],
  providers: [VehicleService, BusinessHistoryService]
})
export class SumatraViewVehicleComponent implements OnInit {

  vehicle;
  vehicleProgramStage;

  constructor(private vehicleService:VehicleService, private businessHistoryService:BusinessHistoryService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      if (params['id']) {
        this.vehicleService.getProgram().then((vehicleProgram) => {
          this.vehicleProgramStage = vehicleProgram;
          this.vehicleService.get(params['id']).then((vehicle:any) => {
            this.vehicle = vehicle;
          })
        })
      } else if (params['bussinessId']) {
        this.vehicleService.getProgram().then((vehicleProgram) => {
          this.businessHistoryService.getProgram().then((businessHistoryProgram:IProgramStage) => {
            this.vehicleProgramStage = vehicleProgram;
            this.businessHistoryService.get(params['bussinessId']).then((businessHistory:any) => {
              businessHistoryProgram.programStageDataElements.forEach((programStageDataElement)=> {
                if (programStageDataElement.dataElement.name == "Program_Vehicle") {
                  businessHistory.dataValues.forEach((dataValue) => {
                    if (dataValue.dataElement == programStageDataElement.dataElement.id) {
                      this.vehicleService.get(dataValue.value).then((vehicle:any) => {
                        this.vehicle = vehicle;
                      })
                    }
                  })
                }
              })
            })
          })
        })
      }
    });

  }

}
