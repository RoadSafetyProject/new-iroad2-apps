/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccidentService } from './accident.service';

describe('Service: Accident', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentService]
    });
  });

  it('should ...', inject([AccidentService], (service: AccidentService) => {
    expect(service).toBeTruthy();
  }));
});
