import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppNavComponent } from './topp-nav.component';

describe('ToppNavComponent', () => {
  let component: ToppNavComponent;
  let fixture: ComponentFixture<ToppNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
