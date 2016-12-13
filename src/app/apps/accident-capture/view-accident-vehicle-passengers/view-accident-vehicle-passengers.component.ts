import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-accident-vehicle-passengers',
  templateUrl: './view-accident-vehicle-passengers.component.html',
  styleUrls: ['./view-accident-vehicle-passengers.component.css']
})
export class ViewAccidentVehiclePassengersComponent implements OnInit {

  private programStage : any;
  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit() {
  }

}
