import { Component, OnInit } from '@angular/core';
import {VehicleInspectionService} from "../../../services/vehicle-inspection.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-vehicle-inspection',
  templateUrl: './view-vehicle-inspection.component.html',
  styleUrls: ['./view-vehicle-inspection.component.css'],
  providers:[VehicleInspectionService]
})
export class ViewVehicleInspectionComponent implements OnInit {

  private menuActions : any;
  private vehicleInspectionProgram;
  private vehicleInspections;
  id;
  constructor(private vehicleInspectionService:VehicleInspectionService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.initiateMenuActions();
    this.vehicleInspectionService.getProgram().then((vehicleInspectionProgram) =>{
      this.vehicleInspectionProgram = vehicleInspectionProgram;
      this.vehicleInspectionService.getEvents().then(vehicleInspections =>{
        this.vehicleInspections = vehicleInspections;
      })
    })
  }
  search(searchText) {
    console.log(searchText);
    this.vehicleInspectionService.searchEvents(searchText).then(vehicleInspections =>{
      this.vehicleInspections = vehicleInspections;
    })
  }
  pageChange(page) {
    this.vehicleInspectionService.getEvents({page:page}).then(vehicleInspections =>{
      this.vehicleInspections = vehicleInspections;
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
