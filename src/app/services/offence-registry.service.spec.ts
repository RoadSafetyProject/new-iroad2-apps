/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffenceRegistryService } from './offence-registry.service';

describe('Service: OffenceRegistry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffenceRegistryService]
    });
  });

  it('should ...', inject([OffenceRegistryService], (service: OffenceRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
