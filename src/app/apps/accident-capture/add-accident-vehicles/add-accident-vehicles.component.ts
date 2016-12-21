import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-add-accident-vehicles',
  templateUrl: './add-accident-vehicles.component.html',
  styleUrls: ['./add-accident-vehicles.component.css']
})
export class AddAccidentVehiclesComponent implements OnInit {

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
