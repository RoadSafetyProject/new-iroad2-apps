import { Component, OnInit } from '@angular/core';
import {BusinessHistoryService} from "../../../services/business-history.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sumatra-view-business-history',
  templateUrl: './sumatra-view-business-history.component.html',
  styleUrls: ['./sumatra-view-business-history.component.css'],
  providers:[BusinessHistoryService]
})
export class SumatraViewBusinessHistoryComponent implements OnInit {

  private menuActions : any;
  private businessHistoryProgram;
  private vehicleHistory;
  id;
  constructor(private businessHistoryService:BusinessHistoryService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.initiateMenuActions();
    this.businessHistoryService.getProgram().then((businessHistoryProgram) =>{
      this.businessHistoryProgram = businessHistoryProgram;
      this.businessHistoryService.getEventsByVehicle(this.id).then(vehicleHistory =>{
        this.vehicleHistory = vehicleHistory;
      })
    })
  }

  search(searchText) {
    console.log(searchText);
    this.businessHistoryService.searchEvents(searchText).then(vehicleHistory =>{
      this.vehicleHistory = vehicleHistory;
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
