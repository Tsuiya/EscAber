import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala10Page } from './sala10.page';

describe('Sala10Page', () => {
  let component: Sala10Page;
  let fixture: ComponentFixture<Sala10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
