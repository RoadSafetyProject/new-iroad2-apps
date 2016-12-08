import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {VehicleOwnerHistoryService} from "../../../services/vehicle-owner-history.service";

@Component({
  selector: 'app-view-vehicle-owner',
  templateUrl: './view-vehicle-owner.component.html',
  styleUrls: ['./view-vehicle-owner.component.css'],
  providers : [VehicleOwnerHistoryService]
})
export class ViewVehicleOwnerComponent implements OnInit {

  private id: string;
  private programStage : any;
  private events : any;

  constructor(private VehicleOwnerHistoryService : VehicleOwnerHistoryService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.VehicleOwnerHistoryService.getProgram().then((programStage : any)=>{
      this.programStage = programStage;
      this.VehicleOwnerHistoryService.getEvents().then(events=>{
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
      this.VehicleOwnerHistoryService.searchEvents(searchText).then(events =>{
        this.events = events;
      })
    }
  }

  pageChange(page) {
    this.VehicleOwnerHistoryService.getEvents({page:page}).then(drivers =>{
      this.events = drivers;
    })
  }

}
