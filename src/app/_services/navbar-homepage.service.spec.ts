import { TestBed } from '@angular/core/testing';

import { NavbarHomepageService } from './navbar-homepage.service';

describe('NavbarHomepageService', () => {
  let service: NavbarHomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarHomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
