import { Component, OnInit } from '@angular/core';
import {BusinessHistoryService} from "../../../services/business-history.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sumatra-add-business-history',
  templateUrl: './sumatra-add-business-history.component.html',
  styleUrls: ['./sumatra-add-business-history.component.css'],
  providers:[BusinessHistoryService]
})
export class SumatraAddBusinessHistoryComponent implements OnInit {

  private businessHistoryProgramStage;
  private relationDataElementValueObject: any = {};
  id;

  constructor(private businessHistoryService:BusinessHistoryService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.businessHistoryService.getProgram().then((businessHistoryProgram : any) =>{
      this.businessHistoryProgramStage = businessHistoryProgram;
      let relationDataElement = "Program_Vehicle";
      businessHistoryProgram.programStageDataElements.forEach((programStageDataElement :any)=>{
        if(programStageDataElement.dataElement.name.toLowerCase() == relationDataElement.toLowerCase()){
          this.relationDataElementValueObject[programStageDataElement.dataElement.id] = this.id;
        }
      })
    })
  }

}
