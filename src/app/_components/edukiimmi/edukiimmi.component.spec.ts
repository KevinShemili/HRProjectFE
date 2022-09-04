import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdukiimmiComponent } from './edukiimmi.component';

describe('EdukiimmiComponent', () => {
  let component: EdukiimmiComponent;
  let fixture: ComponentFixture<EdukiimmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdukiimmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdukiimmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
