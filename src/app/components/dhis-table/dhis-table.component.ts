import { Component, OnInit,Input,ViewChild,Output,EventEmitter } from '@angular/core';
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
  @Output() onSearch = new EventEmitter();
  @Output() onPageChange = new EventEmitter();

  private contextMenuOptions : any;

  //@ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  searchText;
  constructor(private contextMenuService: ContextMenuService,private router: Router) {
    console.log(this.eventWrapper);
  }
  ngOnInit() {
    this.setContextMenuAction(this.menuActions);
  }

  /**
   * Sends a search request
   */
  search(){
    this.eventWrapper = undefined;
    this.onSearch.emit(this.searchText)
  }
  onRowClick(event){
    if(this.contextMenuOptions.length > 0){
      this.contextMenuOptions[0].click(event);
    }
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
    if(this.eventWrapper.pager.page != page){
      this.eventWrapper = undefined;
      this.onPageChange.emit(page)
    }
    //this._page = this.ceil(page);

  }
}
