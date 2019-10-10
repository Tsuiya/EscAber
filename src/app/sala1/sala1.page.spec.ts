import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala1Page } from './sala1.page';

describe('Sala1Page', () => {
  let component: Sala1Page;
  let fixture: ComponentFixture<Sala1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
