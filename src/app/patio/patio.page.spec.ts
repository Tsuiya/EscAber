import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioPage } from './patio.page';

describe('PatioPage', () => {
  let component: PatioPage;
  let fixture: ComponentFixture<PatioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
