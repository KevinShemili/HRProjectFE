import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edukimm1Component } from './edukimm1.component';

describe('Edukimm1Component', () => {
  let component: Edukimm1Component;
  let fixture: ComponentFixture<Edukimm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edukimm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edukimm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
