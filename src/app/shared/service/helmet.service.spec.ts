import { TestBed } from '@angular/core/testing';

import { HelmetService } from './helmet.service';

describe('HelmetService', () => {
  let service: HelmetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelmetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
