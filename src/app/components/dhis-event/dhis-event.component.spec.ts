/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhisEventComponent } from './dhis-event.component';

describe('DhisEventComponent', () => {
  let component: DhisEventComponent;
  let fixture: ComponentFixture<DhisEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhisEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhisEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
