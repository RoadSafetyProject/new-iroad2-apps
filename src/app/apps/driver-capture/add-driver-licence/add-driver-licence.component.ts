import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {DriverLicenceHistoryService} from "../../../services/driver-licence-history.service";

@Component({
  selector: 'app-add-driver-licence',
  templateUrl: './add-driver-licence.component.html',
  styleUrls: ['./add-driver-licence.component.css'],
  providers : [DriverLicenceHistoryService]
})
export class AddDriverLicenceComponent implements OnInit {

  private id;
  public programStage : any;
  public relationDataElementValueObject : any = {};

  constructor(private DriverLicenceHistoryService : DriverLicenceHistoryService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.DriverLicenceHistoryService.getProgram().then((programStage:any)=>{
      this.programStage = programStage;
      let relationDataElement = "Program_Driver";
      programStage.programStageDataElements.forEach((programStageDataElement :any)=>{
        if(programStageDataElement.dataElement.name.toLowerCase() == relationDataElement.toLowerCase()){
          this.relationDataElementValueObject[programStageDataElement.dataElement.id] = this.id;
        }
      });
    },error=>{
      console.log(error);
    });
  }

}
