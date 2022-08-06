import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoo2Component } from './todoo2.component';

describe('Todoo2Component', () => {
  let component: Todoo2Component;
  let fixture: ComponentFixture<Todoo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todoo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Todoo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
