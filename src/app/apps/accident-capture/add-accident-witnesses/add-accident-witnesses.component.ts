import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {AccidentWitnessService} from "../../../services/accident-witness.service";

@Component({
  selector: 'app-add-accident-witnesses',
  templateUrl: './add-accident-witnesses.component.html',
  styleUrls: ['./add-accident-witnesses.component.css']
})
export class AddAccidentWitnessesComponent implements OnInit {

  private programStage : any;
  private relationDataElementValueObject : any;
  private id;

  constructor(private route: ActivatedRoute,private router: Router,private accidentWitnessService : AccidentWitnessService) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
    //this.accidentWitnessService.getProgram().then((programStage : any)=>{
    //  this.programStage = programStage;
    //  let relationDataElement = "Program_Accident";
    //  this.relationDataElementValueObject = {};
    //  //programStage.programStageDataElements.forEach((programStageDataElement :any)=>{
    //  //  if(programStageDataElement.dataElement.name.toLowerCase() == relationDataElement.toLowerCase()){
    //  //    this.relationDataElementValueObject[programStageDataElement.dataElement.id] = this.id;
    //  //  }
    //  //});
    //},error=>{
    //  //fail to get accident witness program stage
    //  console.log(error);
    //});
  }

}
