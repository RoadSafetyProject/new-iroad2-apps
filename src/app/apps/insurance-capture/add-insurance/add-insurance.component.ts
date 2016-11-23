import { Component, OnInit } from '@angular/core';
import {InsuranceService} from "../../../services/insurance.service";

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css'],
  providers : [InsuranceService]
})
export class AddInsuranceComponent implements OnInit {

  private programStage : any;
  private relationDataElementValueObject: any = {};

  constructor(private InsuranceService : InsuranceService) { }

  ngOnInit() {
    //this.InsuranceService.getProgram().then(programStage=>{
    //  this.programStage = programStage;
    //})
  }

}
