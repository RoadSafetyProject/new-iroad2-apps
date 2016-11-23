import { Component, OnInit } from '@angular/core';
import {Insurance} from "../../../models/insurance";
import {InsuranceService} from "../../../services/insurance.service";
import {program} from "webdriver-manager/built/lib/cmds/update";

import {Vehicle} from "../../../models/vehicle";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.css'],
  providers : [InsuranceService,VehicleService]
})
export class InsuranceHomeComponent implements OnInit {

  private menuActions : any;
  private insuranceCompanies;
  private insuranceCompanyProgram;
  constructor(private insuranceService :InsuranceService) {

  }

  ngOnInit() {
    this.initiateMenuActions();
    this.insuranceService.getProgram().then((insuranceCompanyProgram) =>{
      this.insuranceCompanyProgram = insuranceCompanyProgram;
      this.insuranceService.getEvents().then(events =>{
        this.insuranceCompanies = events;
      })
    });
  }

  search(searchText) {
    this.insuranceService.searchEvents(searchText).then(insuranceCompanies =>{
      this.insuranceCompanies = insuranceCompanies;
    })
  }

  pageChange(page) {
    this.insuranceService.getEvents({page:page}).then(insuranceCompanies =>{
      this.insuranceCompanies = insuranceCompanies;
    })
  }

  initiateMenuActions(){
    this.menuActions =[
      {
        title : "view",
        url : "insurances/:id/view"
      },
      {
        title : "Update",
        url : "insurances/:id/update"
      },
      {
        title : "View Vehicles",
        url : "insurances/:id/vehicles"
      }
    ];
  }

}
