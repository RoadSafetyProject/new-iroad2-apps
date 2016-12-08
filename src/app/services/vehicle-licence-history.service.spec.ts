/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleLicenceHistoryService } from './vehicle-licence-history.service';

describe('Service: VehicleLicenceHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleLicenceHistoryService]
    });
  });

  it('should ...', inject([VehicleLicenceHistoryService], (service: VehicleLicenceHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
