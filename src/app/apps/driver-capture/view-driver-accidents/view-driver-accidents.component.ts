import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {AccidentVehicleService} from "../../../services/accident-vehicle.service";
import {AccidentService} from "../../../services/accident.service";

@Component({
  selector: 'app-view-driver-accidents',
  templateUrl: './view-driver-accidents.component.html',
  styleUrls: ['./view-driver-accidents.component.css'],
  providers : [AccidentVehicleService,AccidentService]
})
export class ViewDriverAccidentsComponent implements OnInit {

  private id;
  private programStage : any;
  private events : any;

  constructor(private AccidentService:AccidentService,private AccidentVehicleService: AccidentVehicleService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.AccidentService.getProgram().then(accidentProgramStage=>{
      this.programStage = accidentProgramStage;
      this.AccidentVehicleService.getProgram().then((programStage : any)=>{
        this.AccidentVehicleService.getAccidentIdsByDriver(this.id).then(accidentIds=>{
          this.AccidentService.getAccientsByIds(accidentIds);
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
