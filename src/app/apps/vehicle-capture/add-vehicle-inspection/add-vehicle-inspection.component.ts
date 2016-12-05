import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {VehicleInspectionService} from "../../../services/vehicle-inspection.service";

@Component({
  selector: 'app-add-vehicle-inspection',
  templateUrl: './add-vehicle-inspection.component.html',
  styleUrls: ['./add-vehicle-inspection.component.css'],
  providers : [VehicleInspectionService]
})
export class AddVehicleInspectionComponent implements OnInit {

  private id;
  private programStage: any;
  private relationDataElementValueObject :any = {};

  constructor(private VehicleInspectionService:VehicleInspectionService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.VehicleInspectionService.getProgram().then((programStages:any)=>{
      this.programStage = programStages;
      let relationDataElement = "Program_Vehicle";
      programStages.programStageDataElements.forEach((programStageDataElement :any)=>{
        if(programStageDataElement.dataElement.name.toLowerCase() == relationDataElement.toLowerCase()){
          this.relationDataElementValueObject[programStageDataElement.dataElement.id] = this.id;
        }
      });
    },error=>{
      //fail to get program stage
    });
  }

}
