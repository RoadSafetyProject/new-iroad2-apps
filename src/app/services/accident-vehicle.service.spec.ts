/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccidentVehicleService } from './accident-vehicle.service';

describe('Service: AccidentVehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentVehicleService]
    });
  });

  it('should ...', inject([AccidentVehicleService], (service: AccidentVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
