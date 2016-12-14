import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {OffenceService} from "../../../services/offence.service";

@Component({
  selector: 'app-update-offence',
  templateUrl: './update-offence.component.html',
  styleUrls: ['./update-offence.component.css'],
  providers : [OffenceService]
})
export class UpdateOffenceComponent implements OnInit {

  private programStage : any;
  private event : any;
  private id;

  constructor(private OffenceService:OffenceService, private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.OffenceService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.OffenceService.get(this.id).then(event=>{
        this.event = event;
      },error=>{
        //fail to get accident
      });
    },error=>{
      //fail to get programStage
    });
  }

}
