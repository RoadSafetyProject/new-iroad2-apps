/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgramStageService } from './program-stage.service';

describe('Service: ProgramStage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramStageService]
    });
  });

  it('should ...', inject([ProgramStageService], (service: ProgramStageService) => {
    expect(service).toBeTruthy();
  }));
});
