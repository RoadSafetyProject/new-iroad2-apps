/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhisTableComponent } from './dhis-table.component';

describe('DhisTableComponent', () => {
  let component: DhisTableComponent;
  let fixture: ComponentFixture<DhisTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhisTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
