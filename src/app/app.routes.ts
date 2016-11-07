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
//components for insurance capture
import { InsuranceHomeComponent } from './apps/insurance-capture/insurance-home/insurance-home.component';
import { AddInsuranceComponent } from "./apps/insurance-capture/add-insurance/add-insurance.component";
import { UpdateInsuranceComponent } from './apps/insurance-capture/update-insurance/update-insurance.component';
import { ViewInsuranceComponent } from './apps/insurance-capture/view-insurance/view-insurance.component';
import { ViewInsuranceVehiclesComponent } from './apps/insurance-capture/view-insurance-vehicles/view-insurance-vehicles.component';

export const routes: Routes  = [
  { path: '', redirectTo : "insurances",pathMatch : "full"},
  { path: 'accidents', component: AccidentHommeComponent },
  { path: 'offences', component: OffenceCaptureHomeComponent },
  { path: 'sumatra', component: SumatraHomeComponent },
  { path: 'community', component: CommunityPolicingHomeComponent },
  { path: 'vehicles', component: VehicleCaptureHomeComponent },
  { path: 'accident-view', component: AccidentViewHomeComponent },
  { path: 'drivers', component: DriverCaptureHomeComponent },
  { path: 'insurances', redirectTo : "insurances/all",pathMatch : "full"},
  { path: 'insurances/all', component: InsuranceHomeComponent },
  { path: 'insurances/add', component: AddInsuranceComponent },
  { path: 'insurances/:id/update', component: UpdateInsuranceComponent },
  { path: 'insurances/:id/view', component: ViewInsuranceComponent },
  { path: 'insurances/:id/vehicles', component: ViewInsuranceVehiclesComponent },
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
