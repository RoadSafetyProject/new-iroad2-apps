import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {OffenceRegistryService} from "../../../services/offence-registry.service";
import {OffenceService} from "../../../services/offence.service";
import {OffenceEventRegistryService} from "../../../services/offence-event-registry.service";

@Component({
  selector: 'app-view-offence-registry',
  templateUrl: './view-offence-registry.component.html',
  styleUrls: ['./view-offence-registry.component.css'],
  providers : [OffenceService,OffenceRegistryService,OffenceEventRegistryService]
})
export class ViewOffenceRegistryComponent implements OnInit {

  private id;
  private programStage : any;
  private events : any;
  private menuActions : any;

  constructor(private route: ActivatedRoute,private offenceRegistryService :OffenceRegistryService) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.initiateMenuActions();
    this.offenceRegistryService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.offenceRegistryService.getEventsByOffence(this.id).then(events=>{
        console.log("Events:",events);
        this.events = events;
      },error=>{
        //fail to get events for accident program
      });
    },error=>{
      //fail to get programStage for accident program
    })
  }

  search(searchText) {
    this.offenceRegistryService.searchEvents(searchText).then(events =>{
      this.events = events;
    })
  }

  pageChange(page) {
    this.offenceRegistryService.getEvents({page:page}).then(events =>{
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

  getEvent(){
    return new Promise((resolve,reject)=>{

    })
  }

}
