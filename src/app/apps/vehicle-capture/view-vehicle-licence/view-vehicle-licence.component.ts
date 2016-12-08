import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {VehicleLicenceHistoryService} from "../../../services/vehicle-licence-history.service";

@Component({
  selector: 'app-view-vehicle-licence',
  templateUrl: './view-vehicle-licence.component.html',
  styleUrls: ['./view-vehicle-licence.component.css'],
  providers : [VehicleLicenceHistoryService]
})
export class ViewVehicleLicenceComponent implements OnInit {

  private id: string;
  private programStage : any;
  private events :any;

  constructor(private VehicleLicenceHistoryService : VehicleLicenceHistoryService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.VehicleLicenceHistoryService.getProgram().then((programStage : any)=>{
      this.programStage = programStage;
      this.VehicleLicenceHistoryService.getEvents().then(events=>{
        this.events = events;
      },error=>{
        //fail to load events
      });
    },error=>{
      //fail get program stage
    })
  }

  search(searchText) {
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.VehicleLicenceHistoryService.searchEvents(searchText).then(events =>{
        this.events = events;
      })
    }
  }

  pageChange(page) {
    this.VehicleLicenceHistoryService.getEvents({page:page}).then(drivers =>{
      this.events = drivers;
    })
  }

}
