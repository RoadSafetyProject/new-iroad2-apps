/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DriverLicenceHistoryService } from './driver-licence-history.service';

describe('Service: DriverLicenceHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverLicenceHistoryService]
    });
  });

  it('should ...', inject([DriverLicenceHistoryService], (service: DriverLicenceHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
