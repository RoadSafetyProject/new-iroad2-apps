import { Component, OnInit } from '@angular/core';
import {InsuranceService} from "../../../services/insurance.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-insurance.component.html',
  styleUrls: ['./update-insurance.component.css'],
  providers : [InsuranceService]
})
export class UpdateInsuranceComponent implements OnInit {

  private programStage : any;
  private event : any;
  private relationDataElementValueObject: any = {};
  private id;

  constructor(private InsuranceService : InsuranceService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.InsuranceService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.InsuranceService.get(this.id).then(event=>{
        this.event = event;
      },error=>{
        console.log(error);
      })
    })
  }

}
