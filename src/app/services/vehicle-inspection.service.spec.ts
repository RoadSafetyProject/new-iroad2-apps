/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleInspectionService } from './vehicle-inspection.service';

describe('Service: VehicleInspection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleInspectionService]
    });
  });

  it('should ...', inject([VehicleInspectionService], (service: VehicleInspectionService) => {
    expect(service).toBeTruthy();
  }));
});
