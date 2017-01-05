import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {AccidentWitnessService} from "../../../services/accident-witness.service";

@Component({
  selector: 'app-view-accident-witnesses',
  templateUrl: './view-accident-witnesses.component.html',
  styleUrls: ['./view-accident-witnesses.component.css']
})
export class ViewAccidentWitnessesComponent implements OnInit {

  private programStage : any;
  private id;

  constructor(private route: ActivatedRoute,private router: Router,private accidentWitnessService : AccidentWitnessService) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
    this.accidentWitnessService.getProgram().then((programStage : any)=>{
      this.programStage = programStage;
    },error=>{
      //fail to get accident witness program stage
      console.log(error);
    });
  }

}
