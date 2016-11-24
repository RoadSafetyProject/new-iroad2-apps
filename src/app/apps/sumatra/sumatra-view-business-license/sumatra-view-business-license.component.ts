import { Component, OnInit } from '@angular/core';
import {BusinessHistoryService} from "../../../services/business-history.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sumatra-view-business-license',
  templateUrl: './sumatra-view-business-license.component.html',
  styleUrls: ['./sumatra-view-business-license.component.css'],
  providers:[BusinessHistoryService]
})
export class SumatraViewBusinessLicenseComponent implements OnInit {

  vehicleLicense;
  id;
  businessHistoryProgram;

  constructor(private businessHistoryService:BusinessHistoryService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.businessHistoryService.getProgram().then((vehicleProgram) =>{
      this.businessHistoryProgram = vehicleProgram;
      this.businessHistoryService.get(this.id).then((vehicleLicense : any) =>{
        this.vehicleLicense = vehicleLicense;
      })
    })
  }

}
