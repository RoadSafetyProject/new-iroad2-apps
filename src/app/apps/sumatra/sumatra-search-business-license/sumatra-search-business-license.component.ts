import { Component, OnInit } from '@angular/core';
import {BusinessHistoryService} from "../../../services/business-history.service";

@Component({
  selector: 'app-sumatra-search-business-license',
  templateUrl: './sumatra-search-business-license.component.html',
  styleUrls: ['./sumatra-search-business-license.component.css'],
  providers:[BusinessHistoryService]
})
export class SumatraSearchBusinessLicenseComponent implements OnInit {

  private menuActions : any;
  private businessHistoryProgram;
  private vehicleHistory;
  constructor(private businessHistoryService:BusinessHistoryService) {

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
    console.log(searchText);
    this.businessHistoryService.searchEvents(searchText).then(vehicleHistory =>{
      this.vehicleHistory = vehicleHistory;
    })
  }
  pageChange(page) {
    this.businessHistoryService.getEvents({page:page}).then(vehicleHistory =>{
      this.vehicleHistory = vehicleHistory;
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
