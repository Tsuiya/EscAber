import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala6Page } from './sala6.page';

describe('Sala6Page', () => {
  let component: Sala6Page;
  let fixture: ComponentFixture<Sala6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
