import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala3Page } from './sala3.page';

describe('Sala3Page', () => {
  let component: Sala3Page;
  let fixture: ComponentFixture<Sala3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
