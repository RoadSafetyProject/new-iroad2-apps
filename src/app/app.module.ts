import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import {routing} from "./app.routes";

import { AppComponent } from './app.component';
import { SumatraHomeComponent } from './apps/sumatra/sumatra-home/sumatra-home.component';
import { AccidentHommeComponent } from './apps/accident-capture/accident-homme/accident-homme.component';
import { AccidentViewHomeComponent } from './apps/accident-view/accident-view-home/accident-view-home.component';
import { OffenceCaptureHomeComponent } from './apps/offence-capture/offence-capture-home/offence-capture-home.component';
import { DriverCaptureHomeComponent } from './apps/driver-capture/driver-capture-home/driver-capture-home.component';
import { VehicleCaptureHomeComponent } from './apps/vehicle-capture/vehicle-capture-home/vehicle-capture-home.component';
import { CommunityPolicingHomeComponent } from './apps/community-policing/community-policing-home/community-policing-home.component';
import { InsuranceHomeComponent } from './apps/insurance-capture/insurance-home/insurance-home.component';
import {AddInsuranceComponent} from "./apps/insurance-capture/add-insurance/add-insurance.component";
import { UpdateInsuranceComponent } from './apps/insurance-capture/update-insurance/update-insurance.component';
import { ViewInsuranceComponent } from './apps/insurance-capture/view-insurance/view-insurance.component';
import { ViewInsuranceVehiclesComponent } from './apps/insurance-capture/view-insurance-vehicles/view-insurance-vehicles.component';
import { SumatraViewBusinessHistoryComponent } from './apps/sumatra/sumatra-view-business-history/sumatra-view-business-history.component';
import { SumatraViewVehicleComponent } from './apps/sumatra/sumatra-view-vehicle/sumatra-view-vehicle.component';
import { SumatraAddBusinessHistoryComponent } from './apps/sumatra/sumatra-add-business-history/sumatra-add-business-history.component';


@NgModule({
  declarations: [
    AppComponent,
    SumatraHomeComponent,SumatraViewBusinessHistoryComponent,SumatraViewVehicleComponent,SumatraAddBusinessHistoryComponent,
    AccidentHommeComponent,
    AccidentViewHomeComponent,
    OffenceCaptureHomeComponent,
    DriverCaptureHomeComponent,
    VehicleCaptureHomeComponent,
    CommunityPolicingHomeComponent,
    InsuranceHomeComponent,AddInsuranceComponent, UpdateInsuranceComponent, ViewInsuranceComponent, ViewInsuranceVehiclesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
