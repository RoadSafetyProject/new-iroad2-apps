/**
 * Created by chingalo on 11/7/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumatraHomeComponent } from './apps/sumatra/sumatra-home/sumatra-home.component';
import { AccidentHommeComponent } from './apps/accident-capture/accident-homme/accident-homme.component';
import { AccidentViewHomeComponent } from './apps/accident-view/accident-view-home/accident-view-home.component';
import { OffenceCaptureHomeComponent } from './apps/offence-capture/offence-capture-home/offence-capture-home.component';
import { DriverCaptureHomeComponent } from './apps/driver-capture/driver-capture-home/driver-capture-home.component';
import { VehicleCaptureHomeComponent } from './apps/vehicle-capture/vehicle-capture-home/vehicle-capture-home.component';
import { CommunityPolicingHomeComponent } from './apps/community-policing/community-policing-home/community-policing-home.component';
import { InsuranceHomeComponent } from './apps/insurance-capture/insurance-home/insurance-home.component';

export const routes: Routes  = [
  { path: 'accidents', component: AccidentHommeComponent },
  { path: 'offences', component: OffenceCaptureHomeComponent },
  { path: 'sumatra', component: SumatraHomeComponent },
  { path: 'community', component: CommunityPolicingHomeComponent },
  { path: 'vehicles', component: VehicleCaptureHomeComponent },
  { path: 'accident-view', component: AccidentViewHomeComponent },
  { path: 'drivers', component: DriverCaptureHomeComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
