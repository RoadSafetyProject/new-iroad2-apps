import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-insurance-vehicles',
  templateUrl: './view-insurance-vehicles.component.html',
  styleUrls: ['./view-insurance-vehicles.component.css'],
  providers : []
})
export class ViewInsuranceVehiclesComponent implements OnInit {

  private programStage : any;
  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {

  }

}
