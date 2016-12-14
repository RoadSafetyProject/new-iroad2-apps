import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-offence-police',
  templateUrl: './view-offence-police.component.html',
  styleUrls: ['./view-offence-police.component.css']
})
export class ViewOffencePoliceComponent implements OnInit {

  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
