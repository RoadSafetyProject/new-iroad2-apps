import { Component, OnInit } from '@angular/core';
import {AccidentService} from "../../../services/accident.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {AccidentVehicleService} from "../../../services/accident-vehicle.service";

@Component({
  selector: 'app-view-vehicle-accidents',
  templateUrl: './view-vehicle-accidents.component.html',
  styleUrls: ['./view-vehicle-accidents.component.css'],
  providers:[AccidentService,AccidentVehicleService]
})
export class ViewVehicleAccidentsComponent implements OnInit {

  private menuActions : any;
  private accidentProgram;
  private accidents;
  id;
  constructor(private AccidentService:AccidentService,private AccidentVehicleService: AccidentVehicleService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.AccidentService.getProgram().then(accidentProgramStage=>{
      this.accidentProgram = accidentProgramStage;
      this.AccidentVehicleService.getProgram().then((programStage : any)=>{
        this.AccidentVehicleService.getAccidentIdsByVehicle(this.id).then(accidentIds=>{
          this.AccidentService.getAccidentsByIds(accidentIds).then(events=>{
            this.accidents = events;
          },error=>{
            //fail to get events
          });
        },error=>{
          //fail to get accident ids
        });
      },error=>{
        //fail to load accident vehicles
      });
    },error=>{
      //fail to load accident program stage
    });
  }

}
