import { TestBed } from '@angular/core/testing';

import { MassagesService } from './massages.service';

describe('MassagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MassagesService = TestBed.get(MassagesService);
    expect(service).toBeTruthy();
  });
});
