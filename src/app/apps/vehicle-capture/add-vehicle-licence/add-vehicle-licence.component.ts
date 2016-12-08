import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {VehicleLicenceHistoryService} from "../../../services/vehicle-licence-history.service";

@Component({
  selector: 'app-add-vehicle-licence',
  templateUrl: './add-vehicle-licence.component.html',
  styleUrls: ['./add-vehicle-licence.component.css'],
  providers : [VehicleLicenceHistoryService]
})
export class AddVehicleLicenceComponent implements OnInit {

  private id: string;
  private programStage : any;
  private relationDataElementValueObject :any = {};

  constructor(private VehicleLicenceHistoryService:VehicleLicenceHistoryService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.VehicleLicenceHistoryService.getProgram().then((programStage : any)=>{
      this.programStage = programStage;
      let dataElementName = "Program_Vehicle";
      programStage.programStageDataElements.forEach((programStageDataElement :any)=>{
        if(programStageDataElement.dataElement.name.toLowerCase() == dataElementName.toLowerCase()){
          this.relationDataElementValueObject[programStageDataElement.dataElement.id] = this.id;
        }
      });
    })
  }

}
