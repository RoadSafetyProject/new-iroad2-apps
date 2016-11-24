/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SumatraSearchBusinessLicenseComponent } from './sumatra-search-business-license.component';

describe('SumatraSearchBusinessLicenseComponent', () => {
  let component: SumatraSearchBusinessLicenseComponent;
  let fixture: ComponentFixture<SumatraSearchBusinessLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumatraSearchBusinessLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumatraSearchBusinessLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
