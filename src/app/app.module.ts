import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContextMenuModule } from 'angular2-contextmenu';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';

import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import {routing} from "./app.routes";
import { AppComponent } from './app.component';

import { InsuranceHomeComponent } from './apps/insurance-capture/insurance-home/insurance-home.component';
import {AddInsuranceComponent} from "./apps/insurance-capture/add-insurance/add-insurance.component";
import { UpdateInsuranceComponent } from './apps/insurance-capture/update-insurance/update-insurance.component';
import { ViewInsuranceComponent } from './apps/insurance-capture/view-insurance/view-insurance.component';
import { ViewInsuranceVehiclesComponent } from './apps/insurance-capture/view-insurance-vehicles/view-insurance-vehicles.component';

import { SumatraHomeComponent } from './apps/sumatra/sumatra-home/sumatra-home.component';
import { SumatraViewBusinessHistoryComponent } from './apps/sumatra/sumatra-view-business-history/sumatra-view-business-history.component';
import { SumatraViewVehicleComponent } from './apps/sumatra/sumatra-view-vehicle/sumatra-view-vehicle.component';
import { SumatraAddBusinessHistoryComponent } from './apps/sumatra/sumatra-add-business-history/sumatra-add-business-history.component';

import { DriverCaptureHomeComponent } from './apps/driver-capture/driver-capture-home/driver-capture-home.component';
import { AddDriverComponent } from './apps/driver-capture/add-driver/add-driver.component';
import { UpdateDriverComponent } from './apps/driver-capture/update-driver/update-driver.component';
import { ViewDriverComponent } from './apps/driver-capture/view-driver/view-driver.component';
import { ViewDriverLicenceComponent } from './apps/driver-capture/view-driver-licence/view-driver-licence.component';
import { AddDriverLicenceComponent } from './apps/driver-capture/add-driver-licence/add-driver-licence.component';
import { ViewDriverAccidentsComponent } from './apps/driver-capture/view-driver-accidents/view-driver-accidents.component';
import { ViewDriverOffencesComponent } from './apps/driver-capture/view-driver-offences/view-driver-offences.component';

import { AccidentViewHomeComponent } from './apps/accident-view/accident-view-home/accident-view-home.component';

import { CommunityPolicingHomeComponent } from './apps/community-policing/community-policing-home/community-policing-home.component';

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

import { VehicleCaptureHomeComponent } from './apps/vehicle-capture/vehicle-capture-home/vehicle-capture-home.component';
import { AddVehicleComponent } from './apps/vehicle-capture/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './apps/vehicle-capture/update-vehicle/update-vehicle.component';
import { ViewVehicleComponent } from './apps/vehicle-capture/view-vehicle/view-vehicle.component';
import { ViewVehicleInsurancesComponent } from './apps/vehicle-capture/view-vehicle-insurances/view-vehicle-insurances.component';
import { ViewVehicleBusinessLicenceComponent } from './apps/vehicle-capture/view-vehicle-business-licence/view-vehicle-business-licence.component';
import { ViewVehicleOwnerComponent } from './apps/vehicle-capture/view-vehicle-owner/view-vehicle-owner.component';
import { ViewVehicleInspectionComponent } from './apps/vehicle-capture/view-vehicle-inspection/view-vehicle-inspection.component';
import { ViewVehicleAccidentsComponent } from './apps/vehicle-capture/view-vehicle-accidents/view-vehicle-accidents.component';
import { ViewVehicleOffencesComponent } from './apps/vehicle-capture/view-vehicle-offences/view-vehicle-offences.component';
import { AddVehicleInsurancesComponent } from './apps/vehicle-capture/add-vehicle-insurances/add-vehicle-insurances.component';
import { AddVehicleInspectionComponent } from './apps/vehicle-capture/add-vehicle-inspection/add-vehicle-inspection.component';
import { AddVehicleOwnerComponent } from './apps/vehicle-capture/add-vehicle-owner/add-vehicle-owner.component';
import { AddVehicleLicenceComponent } from './apps/vehicle-capture/add-vehicle-licence/add-vehicle-licence.component';
import { ViewVehicleLicenceComponent } from './apps/vehicle-capture/view-vehicle-licence/view-vehicle-licence.component';
import { DhisMenuComponent } from './components/dhis-menu/dhis-menu.component';
import { DhisTableComponent } from './components/dhis-table/dhis-table.component';
import { PagesPipe } from './components/dhis-table/pages.pipe';
import { ExtractDataValuePipe } from './components/dhis-table/extract-data-value.pipe';
import { DhisEventComponent } from './components/dhis-event/dhis-event.component';
import { DhisViewComponent } from './components/dhis-view/dhis-view.component';
import {DhisEventAddComponent} from "./components/dhis-event-add/dhis-event-add.component";
import { DhisEventUpdateComponent } from './components/dhis-event-update/dhis-event-update.component';


@NgModule({
  declarations: [
    AppComponent,
    SumatraHomeComponent,SumatraViewBusinessHistoryComponent,
    SumatraViewVehicleComponent,SumatraAddBusinessHistoryComponent,
    AccidentHommeComponent,
    AccidentViewHomeComponent,
    OffenceCaptureHomeComponent,
    DriverCaptureHomeComponent, AddDriverComponent, UpdateDriverComponent, ViewDriverComponent,
    ViewDriverLicenceComponent,
    AddDriverLicenceComponent, ViewDriverAccidentsComponent, ViewDriverOffencesComponent,
    VehicleCaptureHomeComponent,
    CommunityPolicingHomeComponent,
    InsuranceHomeComponent,AddInsuranceComponent, UpdateInsuranceComponent,
    ViewInsuranceComponent, ViewInsuranceVehiclesComponent,
    AddOffenceComponent, UpdateOffenceComponent, ViewOffenceComponent,
    ViewOffenceRegistryComponent, ViewOffencePaymentComponent, AddOffencePaymentComponent,
    ViewOffenceDriverComponent, ViewOffenceVehicleComponent, ViewOffencePoliceComponent, AddAccidentComponent,
    ViewAccidentComponent, UpdateAccidentComponent, ViewAccidentWitnessesComponent, ViewAccidentVehiclesComponent,
    ViewAccidentVehiclePassengersComponent, ViewAccidentPassengersComponent, ViewAccidentVehicleDriversComponent,
    ViewAccidentPoliceComponent, AddVehicleComponent, UpdateVehicleComponent,
    ViewVehicleComponent, ViewVehicleInsurancesComponent, ViewVehicleBusinessLicenceComponent,
    ViewVehicleOwnerComponent, ViewVehicleInspectionComponent,
    ViewVehicleAccidentsComponent, ViewVehicleOffencesComponent,
    AddVehicleInsurancesComponent, AddVehicleInspectionComponent,
    AddVehicleOwnerComponent,
    AddVehicleLicenceComponent,
    ViewVehicleLicenceComponent,
    DhisMenuComponent,
    DhisTableComponent,
    PagesPipe,
    ExtractDataValuePipe,
    DhisEventComponent,
    DhisViewComponent,
    DhisEventAddComponent,
    DhisEventUpdateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,DatepickerModule,
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
