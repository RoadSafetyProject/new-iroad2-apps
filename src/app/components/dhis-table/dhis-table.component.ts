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

  @Input() menuActions :any;
  private contextMenuOptions : any;

  //sample to testing context menu
  public items: any[] = [
    { firstName: 'John', lastName: 'Mukulu',id : "1",username : "mukulu"},
    { firstName: 'Joseph', lastName: 'Chingalo',id : "2",username : "chingalo"},
    { firstName: 'Vincent', lastName: 'Minde',id : "3",username : "vincentminde"},
    { firstName: 'Joel', lastName: 'Jacob',id : "4",username : "jay"},
    { firstName: 'John', lastName: 'Foo',id : "5",username : "jfoo"},
  ];

  //@ViewChild('basicMenu') public basicMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) {

  }
  ngOnInit() {
    this.setContextMenuAction(this.menuActions);
  }

  /**
   * method to set context menu, menuActions is array of object with two attribute title and url
   * @param menuActions
   */
  //todo remain handling for all url conversion
  private setContextMenuAction(menuActions){
    this.contextMenuOptions = [];
    menuActions.forEach((menuAction :any)=>{
      this.contextMenuOptions.push({
        html : ()=> menuAction.title,
        click : (item)=>{
          let url = menuAction.url.replace(':id',item.id);
          console.log(url);
        }
      });
    })
  }


  /**
   * note item id object on the row
   * @param $event
   * @param item
   */
  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({
      actions: this.contextMenuOptions,
      event: $event,
      item: item,
    });
    $event.preventDefault();
    $event.stopPropagation();
  }


  pageChange(page){
    this._page = Math.ceil(page);
  }
  ceil(value){
    return Math.ceil(value);
  }
}
