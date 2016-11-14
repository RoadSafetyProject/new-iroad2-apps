import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../services/vehicle.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sumatra-view-vehicle',
  templateUrl: './sumatra-view-vehicle.component.html',
  styleUrls: ['./sumatra-view-vehicle.component.css'],
  providers:[VehicleService]
})
export class SumatraViewVehicleComponent implements OnInit {

  vehicle;
  id;
  vehicleProgramStage

  constructor(private vehicleService:VehicleService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.vehicleService.getProgram().then((vehicleProgram) =>{
      this.vehicleProgramStage = vehicleProgram;
      this.vehicleService.get(this.id).then((vehicle) =>{
        this.vehicle = vehicle;
      })
    })
  }

}
