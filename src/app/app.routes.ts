/**
 * Created by chingalo on 11/7/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//routes for accident view app
import { AccidentViewHomeComponent } from './apps/accident-view/accident-view-home/accident-view-home.component';

//routes for community policing app
import { CommunityPolicingHomeComponent } from './apps/community-policing/community-policing-home/community-policing-home.component';

//rotes for insurance capture app
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

//routes for driver capture app
import { DriverCaptureHomeComponent } from './apps/driver-capture/driver-capture-home/driver-capture-home.component';
import { AddDriverComponent } from './apps/driver-capture/add-driver/add-driver.component';
import { UpdateDriverComponent } from './apps/driver-capture/update-driver/update-driver.component';
import { ViewDriverComponent } from './apps/driver-capture/view-driver/view-driver.component';
import { ViewDriverLicenceComponent } from './apps/driver-capture/view-driver-licence/view-driver-licence.component';
import { AddDriverLicenceComponent } from './apps/driver-capture/add-driver-licence/add-driver-licence.component';
import { ViewDriverAccidentsComponent } from './apps/driver-capture/view-driver-accidents/view-driver-accidents.component';
import { ViewDriverOffencesComponent } from './apps/driver-capture/view-driver-offences/view-driver-offences.component';

//rotes for offence capture app
import { OffenceCaptureHomeComponent } from './apps/offence-capture/offence-capture-home/offence-capture-home.component';
import { AddOffenceComponent } from './apps/offence-capture/add-offence/add-offence.component';
import { UpdateOffenceComponent } from './apps/offence-capture/update-offence/update-offence.component';
import { ViewOffenceComponent } from './apps/offence-capture/view-offence/view-offence.component';
import { ViewOffenceRegistryComponent } from './apps/offence-capture/view-offence-registry/view-offence-registry.component';
import { ViewOffencePaymentComponent } from './apps/offence-capture/view-offence-payment/view-offence-payment.component';
import { AddOffencePaymentComponent } from './apps/offence-capture/add-offence-payment/add-offence-payment.component';
import { ViewOffenceDriverComponent } from './apps/offence-capture/view-offence-driver/view-offence-driver.component';
import { ViewOffenceVehicleComponent } from './apps/offence-capture/view-offence-vehicle/view-offence-vehicle.component';
import { ViewOffencePoliceComponent } from './apps/offence-capture/view-offence-police/view-offence-police.component';

//routes for vehicle capture app
import { VehicleCaptureHomeComponent } from './apps/vehicle-capture/vehicle-capture-home/vehicle-capture-home.component';

//routes for accident capture
import { AccidentHommeComponent } from './apps/accident-capture/accident-homme/accident-homme.component';
import { AddAccidentComponent } from './apps/accident-capture/add-accident/add-accident.component';
import { ViewAccidentComponent } from './apps/accident-capture/view-accident/view-accident.component';
import { UpdateAccidentComponent } from './apps/accident-capture/update-accident/update-accident.component';
import { ViewAccidentWitnessesComponent } from './apps/accident-capture/view-accident-witnesses/view-accident-witnesses.component';
import { ViewAccidentVehiclesComponent } from './apps/accident-capture/view-accident-vehicles/view-accident-vehicles.component';
import { ViewAccidentVehiclePassengersComponent } from './apps/accident-capture/view-accident-vehicle-passengers/view-accident-vehicle-passengers.component';
import { ViewAccidentPassengersComponent } from './apps/accident-capture/view-accident-passengers/view-accident-passengers.component';
import { ViewAccidentVehicleDriversComponent } from './apps/accident-capture/view-accident-vehicle-drivers/view-accident-vehicle-drivers.component';
import { ViewAccidentPoliceComponent } from './apps/accident-capture/view-accident-police/view-accident-police.component';

export const routes: Routes  = [
  { path: '', redirectTo : "insurances/all",pathMatch : "full"},
  { path: 'vehicles', component: VehicleCaptureHomeComponent },

  { path: 'accidents', redirectTo : "accidents/all",pathMatch : "full"},
  { path: 'accidents/all', component: AccidentHommeComponent },
  { path: 'accidents/add', component: AddAccidentComponent },
  { path: 'accidents/:id', redirectTo : "accidents/:id/view",pathMatch : "full"},
  { path: 'accidents/:id/update', component: UpdateAccidentComponent },
  { path: 'accidents/:id/view', component: ViewAccidentComponent },
  { path: 'accidents/:id/witnesses', component: ViewAccidentWitnessesComponent },
  { path: 'accidents/:id/vehicles', component: ViewAccidentVehiclesComponent },
  { path: 'accidents/:id/vehicles/:vehicleId/passengers', component: ViewAccidentVehiclePassengersComponent },
  { path: 'accidents/:id/vehicles/all/passengers', component: ViewAccidentPassengersComponent },
  { path: 'accidents/:id/vehicles/:vehicleId/drivers', component: ViewAccidentVehicleDriversComponent },
  { path: 'accidents/:id/police', component: ViewAccidentPoliceComponent },

  { path: 'offences', redirectTo : "offences/all",pathMatch : "full"},
  { path: 'offences/all', component: OffenceCaptureHomeComponent },
  { path: 'offences/add', component: AddOffenceComponent },
  { path: 'offences/:id/update', component: UpdateOffenceComponent },
  { path: 'offences/:id', redirectTo : "offences/:id/view",pathMatch : "full"},
  { path: 'offences/:id/view', component: ViewOffenceComponent },
  { path: 'offences/:id/registry', component: ViewOffenceRegistryComponent },
  { path: 'offences/:id/payment', component: ViewOffencePaymentComponent },
  { path: 'offences/:id/payment/add', component: AddOffencePaymentComponent },
  { path: 'offences/:id/vehicle', component: ViewOffenceVehicleComponent },
  { path: 'offences/:id/driver', component: ViewOffenceDriverComponent },
  { path: 'offences:id/police', component: ViewOffencePoliceComponent },
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
