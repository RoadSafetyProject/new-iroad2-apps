import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../services/vehicle.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
  providers:[VehicleService]
})
export class AddVehicleComponent implements OnInit {

  private vehicleProgramStage :any;
  private relationDataElementValueObject: any = {};
  id;

  constructor(private vehicleService:VehicleService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.vehicleService.getProgram().then((vehicleProgramStage : any) =>{
      this.vehicleProgramStage = vehicleProgramStage;
      let relationDataElement = "Program_Vehicle";
      vehicleProgramStage.programStageDataElements.forEach((programStageDataElement :any)=>{
        if(programStageDataElement.dataElement.name.toLowerCase() == relationDataElement.toLowerCase()){
          this.relationDataElementValueObject[programStageDataElement.dataElement.id] = this.id;
        }
      });
    })
  }

}
