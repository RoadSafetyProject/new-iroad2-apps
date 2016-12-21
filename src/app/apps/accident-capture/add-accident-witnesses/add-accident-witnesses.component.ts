import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-add-accident-witnesses',
  templateUrl: './add-accident-witnesses.component.html',
  styleUrls: ['./add-accident-witnesses.component.css']
})
export class AddAccidentWitnessesComponent implements OnInit {

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
