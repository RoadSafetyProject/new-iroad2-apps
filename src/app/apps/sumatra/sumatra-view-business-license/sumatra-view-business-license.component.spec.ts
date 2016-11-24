/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SumatraViewBusinessLicenseComponent } from './sumatra-view-business-license.component';

describe('SumatraViewBusinessLicenseComponent', () => {
  let component: SumatraViewBusinessLicenseComponent;
  let fixture: ComponentFixture<SumatraViewBusinessLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumatraViewBusinessLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumatraViewBusinessLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
