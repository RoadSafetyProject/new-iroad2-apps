import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-offence-payment',
  templateUrl: './view-offence-payment.component.html',
  styleUrls: ['./view-offence-payment.component.css']
})
export class ViewOffencePaymentComponent implements OnInit {

  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
