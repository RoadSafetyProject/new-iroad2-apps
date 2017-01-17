import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {IEventsWrapper} from "../../../models/event";
import {IProgramStage} from "../../../models/program-stage";
import {VehicleService} from "../../../services/vehicle.service";
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-view-offence-vehicle',
  templateUrl: './view-offence-vehicle.component.html',
  styleUrls: ['./view-offence-vehicle.component.css'],
  providers:[VehicleService,OffenceService]
})
export class ViewOffenceVehicleComponent implements OnInit {

  vehicleProgramStage;
  vehicle
  private id;

  constructor(private route: ActivatedRoute,private router: Router,private vehicleService:VehicleService, private offenceService :OffenceService) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      this.vehicleService.getProgram().then((vehicleProgram) => {
        this.offenceService.getProgram().then((offenceProgram:IProgramStage) => {
          this.vehicleProgramStage = vehicleProgram;
          this.offenceService.get(params['id']).then((offence:any) => {
            offenceProgram.programStageDataElements.forEach((programStageDataElement)=> {
              if (programStageDataElement.dataElement.name == "Program_Vehicle") {
                offence.dataValues.forEach((dataValue) => {
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
    });
  }

}
