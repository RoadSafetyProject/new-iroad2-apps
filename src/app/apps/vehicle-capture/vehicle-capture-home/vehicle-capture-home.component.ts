import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-capture-home',
  templateUrl: './vehicle-capture-home.component.html',
  styleUrls: ['./vehicle-capture-home.component.css'],
  providers:[VehicleService]
})
export class VehicleCaptureHomeComponent implements OnInit {

  private menuActions : any;
  private vehicleProgram;
  private vehicles;
  constructor(private vehicleService:VehicleService) {

  }

  ngOnInit() {
    this.vehicleProgram = undefined;
    this.initiateMenuActions();
    this.vehicleService.getProgram().then((vehicleProgram) =>{
      this.vehicleProgram = vehicleProgram;
      this.vehicleService.getEvents().then(vehicles =>{
        this.vehicles = vehicles;
      })
    })
  }
  search(searchText) {
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.vehicleService.searchEvents(searchText).then(vehicles =>{
        this.vehicles = vehicles;
      })
    }
  }
  pageChange(page) {
    this.vehicleService.getEvents({page:page}).then(vehicles =>{
      this.vehicles = vehicles;
    })
  }
  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Vehicle",
        url : "vehicles/:id"
      },{
        title : "Add Business Licence",
        url : "sumatra/vehicles/:id/business-history/add"
      },{
        title : "View Business Licence",
        url : "sumatra/vehicles/:id/business-history"
      }];
  }

}
