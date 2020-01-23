import { TestBed } from '@angular/core/testing';

import { PublicationServiceService } from './publication-service.service';

describe('PublicationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicationServiceService = TestBed.get(PublicationServiceService);
    expect(service).toBeTruthy();
  });
});
