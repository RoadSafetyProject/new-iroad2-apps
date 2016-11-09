/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewAccidentVehiclePassengersComponent } from './view-accident-vehicle-passengers.component';

describe('ViewAccidentVehiclePassengersComponent', () => {
  let component: ViewAccidentVehiclePassengersComponent;
  let fixture: ComponentFixture<ViewAccidentVehiclePassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccidentVehiclePassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccidentVehiclePassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
