/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteNavListComponent } from './route-nav-list.component';

describe('RouteNavListComponent', () => {
  let component: RouteNavListComponent;
  let fixture: ComponentFixture<RouteNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
