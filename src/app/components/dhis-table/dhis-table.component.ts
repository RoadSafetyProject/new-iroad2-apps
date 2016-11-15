import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {PagesPipe} from './pages.pipe'
import { ContextMenuService, ContextMenuComponent } from 'angular2-contextmenu';
import {IProgramStage} from "../../models/program-stage";
import {IEventsWrapper} from "../../models/event";
import {ExtractDataValuePipe} from "./extract-data-value.pipe";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'dhis-table',
  templateUrl: './dhis-table.component.html',
  styleUrls: ['./dhis-table.component.css'],
  providers: [ PagesPipe,ExtractDataValuePipe ]
})
export class DhisTableComponent implements OnInit {

  @Input() menuActions :any;
  @Input() programStage :IProgramStage;
  @Input() eventWrapper :IEventsWrapper;
  private contextMenuOptions : any;

  //@ViewChild('basicMenu') public basicMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService,private router: Router) {

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
        click : (event)=>{
          let url = menuAction.url.replace(':id',event.event);
          this.router.navigate([url]);
        }
      });
    })
  }


  /**
   * note item id object on the row
   * @param $event
   * @param item
   */
  public onContextMenu($event: MouseEvent, event: any): void {
    this.contextMenuService.show.next({
      actions: this.contextMenuOptions,
      event: $event,
      item: event,
    });
    $event.preventDefault();
    $event.stopPropagation();
  }


  pageChange(page){
    //this._page = this.ceil(page);
  }
}
