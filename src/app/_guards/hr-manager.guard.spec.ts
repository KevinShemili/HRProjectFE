import { TestBed } from '@angular/core/testing';

import { HrManagerGuard } from './hr-manager.guard';

describe('HrManagerGuard', () => {
  let guard: HrManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HrManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
