import { Component, OnInit } from '@angular/core';
import {OffenceService} from "../../../services/offence.service";
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-offence',
  templateUrl: './view-offence.component.html',
  styleUrls: ['./view-offence.component.css'],
  providers : [OffenceService]
})
export class ViewOffenceComponent implements OnInit {

  private id;

  constructor(private OffenceService : OffenceService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
