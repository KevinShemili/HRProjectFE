import { TestBed } from '@angular/core/testing';

import { EdukimService } from './edukim.service';

describe('EdukimService', () => {
  let service: EdukimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdukimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
