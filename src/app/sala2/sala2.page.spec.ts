import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala2Page } from './sala2.page';

describe('Sala2Page', () => {
  let component: Sala2Page;
  let fixture: ComponentFixture<Sala2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
