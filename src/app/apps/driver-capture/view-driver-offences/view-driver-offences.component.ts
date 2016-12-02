import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-view-driver-offences',
  templateUrl: './view-driver-offences.component.html',
  styleUrls: ['./view-driver-offences.component.css'],
  providers:[OffenceService]
})
export class ViewDriverOffencesComponent implements OnInit {

  private programStage;
  private events;
  id;
  constructor(private offenceService:OffenceService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.offenceService.getProgram().then((programStage) =>{
      this.programStage = programStage;
      this.offenceService.getEventsByDriver(this.id).then(events =>{
        this.events = events;
      })
    })
  }

  search(searchText) {
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.offenceService.searchEvents(searchText).then(events =>{
        this.events = events;
      })
    }
  }

  pageChange(page) {
    this.offenceService.getEvents({page:page}).then(drivers =>{
      this.events = drivers;
    })
  }

}
