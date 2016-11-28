/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleInsuranceService } from './vehicle-insurance.service';

describe('Service: VehicleInsurance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleInsuranceService]
    });
  });

  it('should ...', inject([VehicleInsuranceService], (service: VehicleInsuranceService) => {
    expect(service).toBeTruthy();
  }));
});
