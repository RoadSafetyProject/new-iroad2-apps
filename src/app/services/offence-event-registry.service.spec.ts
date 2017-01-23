/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffenceEventRegistryService } from './offence-event-registry.service';

describe('Service: OffenceEventRegistry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffenceEventRegistryService]
    });
  });

  it('should ...', inject([OffenceEventRegistryService], (service: OffenceEventRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
