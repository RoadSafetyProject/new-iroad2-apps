import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {VehicleInspectionService} from "../../../services/vehicle-inspection.service";

@Component({
  selector: 'app-view-vehicle-inspection',
  templateUrl: './view-vehicle-inspection.component.html',
  styleUrls: ['./view-vehicle-inspection.component.css'],
  providers : [VehicleInspectionService]
})
export class ViewVehicleInspectionComponent implements OnInit {

  private id;
  private programStage: any;
  private events :any;

  constructor(private VehicleInspectionService:VehicleInspectionService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.VehicleInspectionService.getProgram().then(programStages=>{
      this.programStage = programStages;
      this.VehicleInspectionService.getVehicleInspection(this.id).then(events=>{
        this.events = events;
      },error=>{
        //fail to get inspection events
      })
    },error=>{
      //fail to get program stage
    });
  }

  search(searchText) {
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.VehicleInspectionService.searchEvents(searchText).then(events =>{
        this.events = events;
      })
    }
  }

  pageChange(page) {
    this.VehicleInspectionService.getEvents({page:page}).then(drivers =>{
      this.events = drivers;
    })
  }

}
