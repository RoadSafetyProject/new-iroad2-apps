/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehicleOwnerHistoryService } from './vehicle-owner-history.service';

describe('Service: VehicleOwnerHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleOwnerHistoryService]
    });
  });

  it('should ...', inject([VehicleOwnerHistoryService], (service: VehicleOwnerHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
