import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../../models/vehicle";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-sumatra-home',
  templateUrl: './sumatra-home.component.html',
  styleUrls: ['./sumatra-home.component.css'],
  providers:[VehicleService]
})
export class SumatraHomeComponent implements OnInit {

  pageSize = 5;

  total = 21;

  private menuActions : any;
  private vehicleProgram;
  private vehicles;
  constructor(private vehicleService:VehicleService) {

  }

  ngOnInit() {
    this.initiateMenuActions();
    this.vehicleService.getProgram().then((vehicleProgram) =>{
      this.vehicleProgram = vehicleProgram;
      this.vehicleService.getEvents().then(vehicles =>{
        console.log(vehicles);
        this.vehicles = vehicles;
      })
    })
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Vehicle",
        url : "sumatra/vehicles/:id"
      },{
        title : "Add Business Licence",
        url : "sumatra/vehicles/:id/business-history/add"
      },{
        title : "View Business Licence",
        url : "sumatra/vehicles/:id/business-history"
      }];
  }

}
