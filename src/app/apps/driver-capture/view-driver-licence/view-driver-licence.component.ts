import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-driver-licence',
  templateUrl: './view-driver-licence.component.html',
  styleUrls: ['./view-driver-licence.component.css']
})
export class ViewDriverLicenceComponent implements OnInit {

  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
