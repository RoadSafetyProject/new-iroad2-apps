import { Component, OnInit } from '@angular/core';
import {InsuranceService} from "../../../services/insurance.service";
import {VehicleInsuranceService} from "../../../services/vehicle-insurance.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-insurance-vehicles',
  templateUrl: './view-insurance-vehicles.component.html',
  styleUrls: ['./view-insurance-vehicles.component.css'],
  providers : [InsuranceService,VehicleInsuranceService]
})
export class ViewInsuranceVehiclesComponent implements OnInit {

  private programStage : any;
  private id;
  private vehicles;
  menuActions;

  constructor(private insuranceService : InsuranceService,private vehicleInsuranceService : VehicleInsuranceService,private route: ActivatedRoute,private router: Router) {
    this.initiateMenuActions();
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.vehicleInsuranceService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.vehicleInsuranceService.getInsuredVehicles(this.id).then(vehicles=>{
        this.vehicles = vehicles;
      },error=>{
        console.log(error);
      })
    })
  }
  search(searchText) {
    console.log(searchText);
    if(searchText == ""){
      this.ngOnInit()
    }else{
      this.insuranceService.searchEvents(searchText).then(vehicles =>{
        this.vehicles = vehicles;
      })
    }
  }
  initiateMenuActions(){
    this.menuActions =[
    ];
  }
}
