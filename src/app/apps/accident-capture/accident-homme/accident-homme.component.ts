import { Component, OnInit } from '@angular/core';
import {AccidentService} from "../../../services/accident.service";

@Component({
  selector: 'app-accident-homme',
  templateUrl: './accident-homme.component.html',
  styleUrls: ['./accident-homme.component.css'],
  providers : [AccidentService]
})
export class AccidentHommeComponent implements OnInit {

  private programStage : any;
  private events : any;
  private menuActions : any;
  constructor(private AccidentService : AccidentService) { }

  ngOnInit() {
    this.initiateMenuActions();
    this.AccidentService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.AccidentService.getEvents().then(events=>{
        this.events = events;
      },error=>{
        //fail to get events for accident program
      });
    },error=>{
      //fail to get programStage for accident program
    })
  }

  search(searchText) {
    this.AccidentService.searchEvents(searchText).then(events =>{
      this.events = events;
    })
  }

  pageChange(page) {
    this.AccidentService.getEvents({page:page}).then(events =>{
      this.events = events;
    })
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Accident",
        url : "accidents/:id/view"
      },
      {
        title : "Edit Accident",
        url : "accidents/:id/update"
      },
      {
        title : "View Witness",
        url : "accidents/:id/witnesses"
      },
      {
        title : "View Vehicles",
        url : "accidents/:id/vehicles"
      },
      {
        title : "View Passengers",
        url : "accidents/:id/vehicles/all/passengers"
      },
      {
        title : "View Police officer",
        url : "accidents/:id/police"
      }
    ];
  }

}
