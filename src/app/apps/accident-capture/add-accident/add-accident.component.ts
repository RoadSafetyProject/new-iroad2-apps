import { Component, OnInit } from '@angular/core';
import {AccidentService} from "../../../services/accident.service";

@Component({
  selector: 'app-add-accident',
  templateUrl: './add-accident.component.html',
  styleUrls: ['./add-accident.component.css'],
  providers : [AccidentService]
})
export class AddAccidentComponent implements OnInit {

  private programStage  :any;
  private redirectUrlOnSave : string;
  constructor(private AccidentService : AccidentService) { }

  ngOnInit() {
    this.redirectUrlOnSave = "accidents/:id/view";
    this.AccidentService.getProgram().then(programStage=>{
      this.programStage = programStage;
    },error=>{
      //fail to get programStage
    });
  }

}
