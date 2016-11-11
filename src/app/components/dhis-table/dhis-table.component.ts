import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {PagesPipe} from './pages.pipe'
import { ContextMenuService, ContextMenuComponent } from 'angular2-contextmenu';

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

  public items: any[] = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' },
  ];

  //@ViewChild('basicMenu') public basicMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) {}

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({
      actions: [
        {
          html: (item) => `Say hi!`,
          click: (item) => alert('Hi, ' + item.name)
        },
        {
          html: (item) => `Something else`,
          click: (item) => alert('Or not...')
        },
      ],
      event: $event,
      item: item,
    });
    $event.preventDefault();
    $event.stopPropagation();
  }

  public showMessage(message: string): void {
    console.log(message);
  }

  ngOnInit() {
  }

  pageChange(page){
    this._page = Math.ceil(page);
  }
  ceil(value){
    return Math.ceil(value);
  }
}
