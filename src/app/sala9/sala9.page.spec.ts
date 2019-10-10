import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala9Page } from './sala9.page';

describe('Sala9Page', () => {
  let component: Sala9Page;
  let fixture: ComponentFixture<Sala9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
