import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-add-offence-payment',
  templateUrl: './add-offence-payment.component.html',
  styleUrls: ['./add-offence-payment.component.css'],
})
export class AddOffencePaymentComponent implements OnInit {

  private id;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {

  }

}
