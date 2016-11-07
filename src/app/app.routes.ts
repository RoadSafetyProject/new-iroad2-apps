/**
 * Created by chingalo on 11/7/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentHommeComponent } from './apps/accident-capture/accident-homme/accident-homme.component';

import { OffenceCaptureHomeComponent } from './apps/offence-capture/offence-capture-home/offence-capture-home.component';

import { VehicleCaptureHomeComponent } from './apps/vehicle-capture/vehicle-capture-home/vehicle-capture-home.component';

//routes for accident view
import { AccidentViewHomeComponent } from './apps/accident-view/accident-view-home/accident-view-home.component';

//routes for community policing
import { CommunityPolicingHomeComponent } from './apps/community-policing/community-policing-home/community-policing-home.component';

//rotes for insurance capture
import { InsuranceHomeComponent } from './apps/insurance-capture/insurance-home/insurance-home.component';
import { AddInsuranceComponent } from "./apps/insurance-capture/add-insurance/add-insurance.component";
import { UpdateInsuranceComponent } from './apps/insurance-capture/update-insurance/update-insurance.component';
import { ViewInsuranceComponent } from './apps/insurance-capture/view-insurance/view-insurance.component';
import { ViewInsuranceVehiclesComponent } from './apps/insurance-capture/view-insurance-vehicles/view-insurance-vehicles.component';

//routes for sumatra app
import { SumatraHomeComponent } from './apps/sumatra/sumatra-home/sumatra-home.component';
import { SumatraViewBusinessHistoryComponent } from './apps/sumatra/sumatra-view-business-history/sumatra-view-business-history.component';
import { SumatraViewVehicleComponent } from './apps/sumatra/sumatra-view-vehicle/sumatra-view-vehicle.component';
import { SumatraAddBusinessHistoryComponent } from './apps/sumatra/sumatra-add-business-history/sumatra-add-business-history.component';

//routes for driver capture
import { DriverCaptureHomeComponent } from './apps/driver-capture/driver-capture-home/driver-capture-home.component';
import { AddDriverComponent } from './apps/driver-capture/add-driver/add-driver.component';
import { UpdateDriverComponent } from './apps/driver-capture/update-driver/update-driver.component';
import { ViewDriverComponent } from './apps/driver-capture/view-driver/view-driver.component';
import { ViewDriverLicenceComponent } from './apps/driver-capture/view-driver-licence/view-driver-licence.component';
import { AddDriverLicenceComponent } from './apps/driver-capture/add-driver-licence/add-driver-licence.component';
import { ViewDriverAccidentsComponent } from './apps/driver-capture/view-driver-accidents/view-driver-accidents.component';
import { ViewDriverOffencesComponent } from './apps/driver-capture/view-driver-offences/view-driver-offences.component';

export const routes: Routes  = [
  { path: '', redirectTo : "insurances/all",pathMatch : "full"},
  { path: 'accidents', component: AccidentHommeComponent },
  { path: 'offences', component: OffenceCaptureHomeComponent },
  { path: 'vehicles', component: VehicleCaptureHomeComponent },
  { path: 'accident-view', component: AccidentViewHomeComponent },
  { path: 'community', component: CommunityPolicingHomeComponent },
  { path: 'drivers', redirectTo : "drivers/all",pathMatch : "full"},
  { path: 'drivers/all', component: DriverCaptureHomeComponent },
  { path: 'drivers/add', component: AddDriverComponent },
  { path: 'drivers/:id/update', component: UpdateDriverComponent },
  { path: 'drivers/:id', redirectTo : "drivers/:id/view",pathMatch : "full"},
  { path: 'drivers/:id/view', component: ViewDriverComponent },
  { path: 'drivers/:id/licences', component: ViewDriverLicenceComponent },
  { path: 'drivers/:id/licences/add', component: AddDriverLicenceComponent },
  { path: 'drivers/:id/accidents', component: ViewDriverAccidentsComponent },
  { path: 'drivers/:id/offences', component: ViewDriverOffencesComponent },
  { path: 'insurances', redirectTo : "insurances/all",pathMatch : "full"},
  { path: 'insurances/all', component: InsuranceHomeComponent },
  { path: 'insurances/add', component: AddInsuranceComponent },
  { path: 'insurances/:id/update', component: UpdateInsuranceComponent },
  { path: 'insurances/:id', redirectTo : "insurances/:id/view",pathMatch : "full"},
  { path: 'insurances/:id/view', component: ViewInsuranceComponent },
  { path: 'insurances/:id/vehicles', component: ViewInsuranceVehiclesComponent },
  { path: 'sumatra', redirectTo : "sumatra/vehicles",pathMatch : "full"},
  { path: 'sumatra/vehicles', component: SumatraHomeComponent },
  { path: 'sumatra/vehicles/:id', redirectTo : "sumatra/vehicles/:id/view",pathMatch : "full"},
  { path: 'sumatra/vehicles/:id/view', component: SumatraViewVehicleComponent },
  { path: 'sumatra/vehicles/:id/business-history', component: SumatraViewBusinessHistoryComponent },
  { path: 'sumatra/vehicles/:id/business-history/add', component: SumatraAddBusinessHistoryComponent },
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
