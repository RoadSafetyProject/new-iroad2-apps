import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router,NavigationEnd } from '@angular/router';
import {DriverLicenceHistoryService} from "../../../services/driver-licence-history.service";

@Component({
  selector: 'app-view-driver-licence',
  templateUrl: './view-driver-licence.component.html',
  styleUrls: ['./view-driver-licence.component.css'],
  providers : [DriverLicenceHistoryService]
})
export class ViewDriverLicenceComponent implements OnInit {

  private id;
  public programStage : any;
  public driverLicenceHistory : any;

  constructor(private DriverLicenceHistoryService : DriverLicenceHistoryService,private route: ActivatedRoute,private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.DriverLicenceHistoryService.getProgram().then(programStage=>{
      this.programStage = programStage;
      this.DriverLicenceHistoryService.getEventByDriver(this.id).then(events=>{
        this.driverLicenceHistory = events;
      },error=>{
        console.log(error);
      });
    },error=>{
      console.log(error);
    });
  }

  search(searchText) {
    this.DriverLicenceHistoryService.searchEvents(searchText).then(drivers =>{
      this.driverLicenceHistory = drivers;
    })
  }

  pageChange(page) {
    this.DriverLicenceHistoryService.getEvents({page:page}).then(drivers =>{
      this.driverLicenceHistory = drivers;
    })
  }

}
