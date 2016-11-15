/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhisEventAddComponent } from './dhis-event-add.component';

describe('DhisEventAddComponent', () => {
  let component: DhisEventAddComponent;
  let fixture: ComponentFixture<DhisEventAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhisEventAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhisEventAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
