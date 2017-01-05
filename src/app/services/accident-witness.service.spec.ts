/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccidentWitnessService } from './accident-witness.service';

describe('Service: AccidentWitness', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentWitnessService]
    });
  });

  it('should ...', inject([AccidentWitnessService], (service: AccidentWitnessService) => {
    expect(service).toBeTruthy();
  }));
});
