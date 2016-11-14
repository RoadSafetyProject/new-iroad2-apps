/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhisViewComponent } from './dhis-view.component';

describe('DhisViewComponent', () => {
  let component: DhisViewComponent;
  let fixture: ComponentFixture<DhisViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhisViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
