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
        url : "vehicles/:id/view"
      },{
        title : "Edit Vehicle",
        url : "vehicles/:id/update"
      },{
        title : "Add insurance",
        url : "vehicles/:id/insurances/add"
      },{
        title : "View insurance",
        url : "vehicles/:id/insurances"
      },{
        title : "Add Vehicle Licence",
        url : "vehicles/:id/insurances/add"
      },{
        title : "View Vehicle Licence",
        url : "vehicles/:id/insurances"
      },{
        title : "Add Vehicle Owner",
        url : "vehicles/:id/owner-history/add"
      },{
        title : "View Vehicle Owner's History",
        url : "vehicles/:id/owner-history"
      },{
        title : "Add Vehicle Inspection",
        url : "vehicles/:id/inspection/add"
      },{
        title : "View Vehicle Inspection",
        url : "vehicles/:id/inspection"
      },{
        title : "View Accidents",
        url : "vehicles/:id/accidents"
      },{
        title : "View Offences",
        url : "vehicles/:id/offences"
      }
    ]
  }

}
