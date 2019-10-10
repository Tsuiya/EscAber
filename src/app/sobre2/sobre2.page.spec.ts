import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sobre2Page } from './sobre2.page';

describe('Sobre2Page', () => {
  let component: Sobre2Page;
  let fixture: ComponentFixture<Sobre2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sobre2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sobre2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
