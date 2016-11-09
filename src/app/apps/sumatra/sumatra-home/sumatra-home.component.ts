import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumatra-home',
  templateUrl: './sumatra-home.component.html',
  styleUrls: ['./sumatra-home.component.css']
})
export class SumatraHomeComponent implements OnInit {

  pageSize = 5;

  total = 21;

  constructor() { }

  ngOnInit() {
  }

}
