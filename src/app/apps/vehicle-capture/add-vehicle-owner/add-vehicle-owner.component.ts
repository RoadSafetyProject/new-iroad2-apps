import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {VehicleOwnerHistoryService} from "../../../services/vehicle-owner-history.service";

@Component({
  selector: 'app-add-vehicle-owner',
  templateUrl: './add-vehicle-owner.component.html',
  styleUrls: ['./add-vehicle-owner.component.css'],
  providers : [VehicleOwnerHistoryService]
})
export class AddVehicleOwnerComponent implements OnInit {

  private id: string;
  private programStage : any;
  private relationDataElementValueObject :any = {};

  constructor(private VehicleOwnerHistoryService : VehicleOwnerHistoryService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.VehicleOwnerHistoryService.getProgram().then((programStage : any)=>{
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
