import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../services/driver.service";

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css'],
  providers : [DriverService]
})
export class AddDriverComponent implements OnInit {

  public programStage : any;

  constructor(private DriverService : DriverService) { }

  ngOnInit() {
    this.DriverService.getProgram().then(programStage=>{
      this.programStage = programStage;
    },error=>{
      console.log(error);
    });
  }

}
