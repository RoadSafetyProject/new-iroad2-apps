import { Component, OnInit } from '@angular/core';
import {VehicleInsuranceService} from "../../../services/vehicle-insurance.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-vehicle-insurances',
  templateUrl: './view-vehicle-insurances.component.html',
  styleUrls: ['./view-vehicle-insurances.component.css'],
  providers:[VehicleInsuranceService]
})
export class ViewVehicleInsurancesComponent implements OnInit {

  private menuActions : any;
  private vehicleInsuranceProgram;
  private vehicleInsuranceHistory;
  id;
  constructor(private vehicleInsuranceService:VehicleInsuranceService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
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
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.vehicleInsuranceService.searchEvents(searchText).then(events =>{
        this.vehicleInsuranceHistory = events;
      })
    }
  }

  pageChange(page) {
    this.vehicleInsuranceService.getEvents({page:page}).then(drivers =>{
      this.vehicleInsuranceHistory = drivers;
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
