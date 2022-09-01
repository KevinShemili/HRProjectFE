import { TestBed } from '@angular/core/testing';

import { Edukimm1Service } from './edukimm1.service';

describe('Edukimm1Service', () => {
  let service: Edukimm1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Edukimm1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
