import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../../services/driver.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css'],
  providers : [DriverService]
})
export class UpdateDriverComponent implements OnInit {

  private programStage : any;
  private event : any;
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
