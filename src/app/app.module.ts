import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy,HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { SumatraHomeComponent } from './apps/sumatra/sumatra-home/sumatra-home.component';
import { AccidentHommeComponent } from './apps/accident-capture/accident-homme/accident-homme.component';
import { AccidentViewHomeComponent } from './apps/accident-view/accident-view-home/accident-view-home.component';
import { OffenceCaptureHomeComponent } from './apps/offence-capture/offence-capture-home/offence-capture-home.component';
import { DriverCaptureHomeComponent } from './apps/driver-capture/driver-capture-home/driver-capture-home.component';
import { VehicleCaptureHomeComponent } from './apps/vehicle-capture/vehicle-capture-home/vehicle-capture-home.component';
import { CommunityPolicingHomeComponent } from './apps/community-policing/community-policing-home/community-policing-home.component';
import { InsuranceHomeComponent } from './apps/insurance-capture/insurance-home/insurance-home.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    SumatraHomeComponent,
    AccidentHommeComponent,
    AccidentViewHomeComponent,
    OffenceCaptureHomeComponent,
    DriverCaptureHomeComponent,
    VehicleCaptureHomeComponent,
    CommunityPolicingHomeComponent,
    InsuranceHomeComponent,
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
