import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-accident-vehicles',
  templateUrl: './view-accident-vehicles.component.html',
  styleUrls: ['./view-accident-vehicles.component.css']
})
export class ViewAccidentVehiclesComponent implements OnInit {

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
