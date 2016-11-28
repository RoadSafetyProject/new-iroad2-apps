import { Component, OnInit } from '@angular/core';
import {VehicleInsuranceService} from "../../../services/vehicle-insurance.service";

@Component({
  selector: 'app-view-vehicle-insurances',
  templateUrl: './view-vehicle-insurances.component.html',
  styleUrls: ['./view-vehicle-insurances.component.css']
})
export class ViewVehicleInsurancesComponent implements OnInit {

  private menuActions : any;
  private vehicleInsuranceProgram;
  private vehicleInsuranceHistory;
  constructor(private vehicleInsuranceService:VehicleInsuranceService) {

  }

  ngOnInit() {
    this.initiateMenuActions();
    this.vehicleInsuranceService.getProgram().then((vehicleInsuranceProgram) =>{
      this.vehicleInsuranceProgram = vehicleInsuranceProgram;
      this.vehicleInsuranceService.getEvents().then(vehicleInsuranceHistory =>{
        this.vehicleInsuranceHistory = vehicleInsuranceHistory;
      })
    })
  }
  search(searchText) {
    console.log(searchText);
    this.vehicleInsuranceService.searchEvents(searchText).then(vehicleHistory =>{
      this.vehicleInsuranceHistory = vehicleHistory;
    })
  }
  pageChange(page) {
    this.vehicleInsuranceService.getEvents({page:page}).then(vehicleInsuranceHistory =>{
      this.vehicleInsuranceHistory = vehicleInsuranceHistory;
    })
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Business Licence Details",
        url : "sumatra/business-history/:id"
      }];
  }
}
