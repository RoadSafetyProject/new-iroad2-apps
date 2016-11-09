/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewAccidentVehicleDriversComponent } from './view-accident-vehicle-drivers.component';

describe('ViewAccidentVehicleDriversComponent', () => {
  let component: ViewAccidentVehicleDriversComponent;
  let fixture: ComponentFixture<ViewAccidentVehicleDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccidentVehicleDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccidentVehicleDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
