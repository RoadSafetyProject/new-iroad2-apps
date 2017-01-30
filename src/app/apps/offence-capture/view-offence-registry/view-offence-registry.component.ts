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
    this.menuActions = [];
  }


}
