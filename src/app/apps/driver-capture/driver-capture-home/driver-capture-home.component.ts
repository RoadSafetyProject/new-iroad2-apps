import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../services/driver.service";

@Component({
  selector: 'app-driver-capture-home',
  templateUrl: './driver-capture-home.component.html',
  styleUrls: ['./driver-capture-home.component.css'],
  providers : [DriverService]
})
export class DriverCaptureHomeComponent implements OnInit {

  private programStage;
  private drivers;
  private menuActions : any;

  constructor(private DriverService:DriverService) { }

  ngOnInit() {
    this.initiateMenuActions();
    this.DriverService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.DriverService.getEvents().then(events=>{
        this.drivers = events;
      },error=>{
        console.log(error);
      })
    },error=>{
      console.log(error);
    })
  }

  search(searchText) {
    this.DriverService.searchEvents(searchText).then(drivers =>{
      this.drivers = drivers;
    })
  }

  pageChange(page) {
    this.DriverService.getEvents({page:page}).then(drivers =>{
      this.drivers = drivers;
    })
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Driver",
        url : "drivers/:id/view"
      },
      {
        title : "Edit Driver",
        url : "drivers/:id/update"
      },
      {
        title : "View Licence History",
        url : "drivers/:id/licences"
      },
      {
        title : "Add Licence History",
        url : "drivers/:id/licences/add"
      },
      {
        title : "View Accidents",
        url : "drivers/:id/accidents"
      },
      {
        title : "View Offences",
        url : "drivers/:id/offences"
      }
    ];
  }

}
