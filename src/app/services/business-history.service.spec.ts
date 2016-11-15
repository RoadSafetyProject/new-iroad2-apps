/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusinessHistoryService } from './business-history.service';

describe('Service: BusinessHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessHistoryService]
    });
  });

  it('should ...', inject([BusinessHistoryService], (service: BusinessHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
