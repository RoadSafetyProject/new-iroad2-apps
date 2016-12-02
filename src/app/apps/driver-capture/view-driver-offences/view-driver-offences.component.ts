import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-driver-offences',
  templateUrl: './view-driver-offences.component.html',
  styleUrls: ['./view-driver-offences.component.css']
})
export class ViewDriverOffencesComponent implements OnInit {

  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }


  ngOnInit() {
  }

}
