/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModernMeanComponent } from './modern-mean.component';

describe('ModernMeanComponent', () => {
  let component: ModernMeanComponent;
  let fixture: ComponentFixture<ModernMeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernMeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
