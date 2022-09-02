import { TestBed } from '@angular/core/testing';

import { HrSpecialistGuard } from './hr-specialist.guard';

describe('HrSpecialistGuard', () => {
  let guard: HrSpecialistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HrSpecialistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
