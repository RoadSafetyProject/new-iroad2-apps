import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {IEventsWrapper} from "../../../models/event";
import {IProgramStage} from "../../../models/program-stage";
import {DriverService} from "../../../services/driver.service";
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-view-offence-driver',
  templateUrl: './view-offence-driver.component.html',
  styleUrls: ['./view-offence-driver.component.css']
})
export class ViewOffenceDriverComponent implements OnInit {
  driverProgramStage;
  driver
  private id;

  constructor(private route: ActivatedRoute,private router: Router,private driverService:DriverService, private offenceService :OffenceService) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      this.driverService.getProgram().then((driverProgram) => {
        this.offenceService.getProgram().then((offenceProgram:IProgramStage) => {
          this.driverProgramStage = driverProgram;
          this.offenceService.get(params['id']).then((offence:any) => {
            offenceProgram.programStageDataElements.forEach((programStageDataElement)=> {
              if (programStageDataElement.dataElement.name == "Program_Driver") {
                offence.dataValues.forEach((dataValue) => {
                  if (dataValue.dataElement == programStageDataElement.dataElement.id) {
                    this.driverService.get(dataValue.value).then((driver:any) => {
                      this.driver = driver;
                    })
                  }
                })
              }
            })
          })
        })
      })
    });
  }

}
