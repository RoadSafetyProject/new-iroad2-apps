import { Component, OnInit,Input } from '@angular/core';
import {PagesPipe} from './pages.pipe'

@Component({
  selector: 'dhis-table',
  templateUrl: './dhis-table.component.html',
  styleUrls: ['./dhis-table.component.css'],
  providers: [ PagesPipe ]
})
export class DhisTableComponent implements OnInit {

  private _pageSize: any = 10;
  @Input() set pageSize(pageSize:any){
    if(pageSize){
      this._pageSize = 5;
    }else{
      this._pageSize = pageSize;
    }
  };
  private _page: any = 1;
  @Input() set page(page:any){
    if(page){
      this._page = 1;
    }else{
      this._page = page;
    }
  };
  @Input() total:number;

  constructor() { }

  ngOnInit() {
  }

  pageChange(page){
    this._page = Math.ceil(page);
  }
  ceil(value){
    return Math.ceil(value);
  }
}
