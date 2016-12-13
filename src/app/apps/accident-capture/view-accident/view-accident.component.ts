import { Component, OnInit } from '@angular/core';
import {AccidentService} from "../../../services/accident.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-accident',
  templateUrl: './view-accident.component.html',
  styleUrls: ['./view-accident.component.css'],
  providers:[AccidentService]
})
export class ViewAccidentComponent implements OnInit {

  private programStage : any;
  private event : any;
  private id;

  constructor(private AccidentService : AccidentService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
    this.AccidentService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.AccidentService.get(this.id).then(event=>{
        this.event = event;
      },error=>{
        //fail to get accident
      });
    },error=>{
      //fail to get programStage
    });
  }

}
