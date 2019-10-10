import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala8Page } from './sala8.page';

describe('Sala8Page', () => {
  let component: Sala8Page;
  let fixture: ComponentFixture<Sala8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sala8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
