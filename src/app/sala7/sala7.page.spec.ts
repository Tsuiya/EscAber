import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala7Page } from './sala7.page';

describe('Sala7Page', () => {
  let component: Sala7Page;
  let fixture: ComponentFixture<Sala7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
