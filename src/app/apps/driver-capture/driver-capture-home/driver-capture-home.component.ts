import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../services/driver.service";

@Component({
  selector: 'app-driver-capture-home',
  templateUrl: './driver-capture-home.component.html',
  styleUrls: ['./driver-capture-home.component.css'],
  providers : [DriverService]
})
export class DriverCaptureHomeComponent implements OnInit {

  private programStage : any;
  private drivers : any;
  private menuActions : any;

  constructor(private DriverService:DriverService) { }

  ngOnInit() {
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
        title : "",
        url : ""
      },
    ];
  }

}
