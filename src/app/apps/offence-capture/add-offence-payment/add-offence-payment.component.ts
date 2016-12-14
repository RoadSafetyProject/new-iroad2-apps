import { Component, OnInit } from '@angular/core';
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-add-offence-payment',
  templateUrl: './add-offence-payment.component.html',
  styleUrls: ['./add-offence-payment.component.css'],
  providers : [OffenceService]
})
export class AddOffencePaymentComponent implements OnInit {

  private programStage : any;

  constructor(private OffenceService : OffenceService) { }

  ngOnInit() {
    this.OffenceService.getProgram().then(programStage=>{
      this.programStage = programStage;
    },error=>{
      //fail to get programStage
    });
  }

}
