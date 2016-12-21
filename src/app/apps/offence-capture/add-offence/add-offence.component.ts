import { Component, OnInit } from '@angular/core';
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-add-offence',
  templateUrl: './add-offence.component.html',
  styleUrls: ['./add-offence.component.css'],
  providers : [OffenceService]
})
export class AddOffenceComponent implements OnInit {

  private programStage : any;
  private redirectUrlOnSave : string;
  constructor(private OffenceService : OffenceService) { }

  ngOnInit() {
    this.redirectUrlOnSave = "offences/:id/view";
    this.OffenceService.getProgram().then(programStage=>{
      this.programStage = programStage;
    },error=>{
      //fail to get programStage
    });
  }

}
