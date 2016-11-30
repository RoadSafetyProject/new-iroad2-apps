import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {DriverService} from "../../../services/driver.service";

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css'],
  providers : [DriverService]
})
export class ViewDriverComponent implements OnInit {

  private programStage : any;
  private event : any;
  private relationDataElementValueObject: any = {};
  private id;

  constructor(private DriverService : DriverService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.DriverService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.DriverService.get(this.id).then(event=>{
        this.event = event;
      },error=>{
        console.log(error);
      });
    },error=>{
      console.log(error);
    })
  }

}
