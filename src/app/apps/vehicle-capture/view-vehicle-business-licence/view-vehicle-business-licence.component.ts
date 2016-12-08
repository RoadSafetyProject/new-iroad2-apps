import { Component, OnInit } from '@angular/core';
import {BusinessHistoryService} from "../../../services/business-history.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-vehicle-business-licence',
  templateUrl: './view-vehicle-business-licence.component.html',
  styleUrls: ['./view-vehicle-business-licence.component.css'],
  providers:[BusinessHistoryService]
})
export class ViewVehicleBusinessLicenceComponent implements OnInit {

  private menuActions : any;
  private businessHistoryProgram;
  private vehicleHistory;
  id;
  constructor(private businessHistoryService:BusinessHistoryService,private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.initiateMenuActions();
    this.businessHistoryService.getProgram().then((businessHistoryProgram) =>{
      this.businessHistoryProgram = businessHistoryProgram;
      this.businessHistoryService.getEvents().then(vehicleHistory =>{
        this.vehicleHistory = vehicleHistory;
      })
    })
  }
  search(searchText) {
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.businessHistoryService.searchEvents(searchText).then(events =>{
        this.vehicleHistory = events;
      })
    }
  }

  pageChange(page) {
    this.businessHistoryService.getEvents({page:page}).then(drivers =>{
      this.vehicleHistory = drivers;
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
