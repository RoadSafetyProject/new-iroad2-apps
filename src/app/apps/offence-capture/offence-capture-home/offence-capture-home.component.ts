import { Component, OnInit } from '@angular/core';
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-offence-capture-home',
  templateUrl: './offence-capture-home.component.html',
  styleUrls: ['./offence-capture-home.component.css'],
  providers : [OffenceService]
})
export class OffenceCaptureHomeComponent implements OnInit {

  private programStage : any;
  private events : any;
  private menuActions : any;

  constructor(private OffenceService :OffenceService) { }

  ngOnInit() {
    this.initiateMenuActions();
    this.OffenceService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.OffenceService.getEvents().then(events=>{
        this.events = events;
      },error=>{
        //fail to get events for accident program
      });
    },error=>{
      //fail to get programStage for accident program
    })
  }

  search(searchText) {
    this.OffenceService.searchEvents(searchText).then(events =>{
      this.events = events;
    })
  }

  pageChange(page) {
    this.OffenceService.getEvents({page:page}).then(events =>{
      this.events = events;
    })
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Offence",
        url : "offences/:id/view"
      },
      {
        title : "Edit Offence",
        url : "offences/:id/update"
      },
      {
        title : "View Offence's Registry",
        url : "offences/:id/registry"
      },
      {
        title : "View Offence Payment",
        url : "offences/:id/payment"
      },
      {
        title : "Add Offence Payment",
        url : "offences/:id/payment/add"
      },
      {
        title : "View Offence Vehicle",
        url : "offences/:id/vehicle"
      },
      {
        title : "View Offence Driver",
        url : "offences/:id/driver"
      },
      {
        title : "View Offence Police Officer",
        url : "offences/:id/police"
      },
    ];
  }

}
