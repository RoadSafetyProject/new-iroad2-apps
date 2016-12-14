import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-update-offence',
  templateUrl: './update-offence.component.html',
  styleUrls: ['./update-offence.component.css']
})
export class UpdateOffenceComponent implements OnInit {

  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
