import { Component, OnInit } from '@angular/core';
import {AccidentService} from "../../../services/accident.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-vehicle-accidents',
  templateUrl: './view-vehicle-accidents.component.html',
  styleUrls: ['./view-vehicle-accidents.component.css'],
  providers:[AccidentService]
})
export class ViewVehicleAccidentsComponent implements OnInit {

  private menuActions : any;
  private accidentProgram;
  private accidents;
  id;
  constructor(private accidentService:AccidentService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.initiateMenuActions();
  }

  ngOnInit() {
    this.accidentService.getProgram().then((accidentProgram) =>{
      this.accidentProgram = accidentProgram;
      this.accidentService.getEventsByVehicle(this.id).then(accidents =>{
        this.accidents = accidents;
      })
    })
  }

  search(searchText) {
    console.log(searchText);
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.accidentService.searchEvents(searchText).then(accidents =>{
        this.accidents = accidents;
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
