import { Component, OnInit } from '@angular/core';
import {OffenceService} from "../../../services/offence.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-vehicle-offences',
  templateUrl: './view-vehicle-offences.component.html',
  styleUrls: ['./view-vehicle-offences.component.css'],
  providers:[OffenceService]
})
export class ViewVehicleOffencesComponent implements OnInit {

  private menuActions : any;
  private offenceProgram;
  private offenceEvents;
  id;
  constructor(private offenceService:OffenceService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.initiateMenuActions();
  }

  ngOnInit() {
    this.offenceService.getProgram().then((offenceProgram) =>{
      this.offenceProgram = offenceProgram;
      this.offenceService.getEventsByVehicle(this.id).then(offenceEvents =>{
        this.offenceEvents = offenceEvents;
      })
    })
  }

  search(searchText) {
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.offenceService.searchEvents(searchText).then(events =>{
        this.offenceEvents = events;
      })
    }
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "View Business Licence Details",
        url : "sumatra/business-history/:id"
      }];
  }

}
