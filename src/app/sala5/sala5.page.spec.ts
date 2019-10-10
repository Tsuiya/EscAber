import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala5Page } from './sala5.page';

describe('Sala5Page', () => {
  let component: Sala5Page;
  let fixture: ComponentFixture<Sala5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
