import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-accident-police',
  templateUrl: './view-accident-police.component.html',
  styleUrls: ['./view-accident-police.component.css']
})
export class ViewAccidentPoliceComponent implements OnInit {

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
