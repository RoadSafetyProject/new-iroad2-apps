import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../../models/vehicle";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-sumatra-home',
  templateUrl: './sumatra-home.component.html',
  styleUrls: ['./sumatra-home.component.css'],
  providers:[VehicleService]
})
export class SumatraHomeComponent implements OnInit {

  pageSize = 5;

  total = 21;

  constructor(private vehicleService:VehicleService) {

  }

  ngOnInit() {
    //this.vehicleService.getAll()
  }

}
