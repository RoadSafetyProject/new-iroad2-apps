/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SumatraViewBusinessHistoryComponent } from './sumatra-view-business-history.component';

describe('SumatraViewBusinessHistoryComponent', () => {
  let component: SumatraViewBusinessHistoryComponent;
  let fixture: ComponentFixture<SumatraViewBusinessHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumatraViewBusinessHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumatraViewBusinessHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
