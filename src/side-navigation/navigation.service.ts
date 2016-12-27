import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NavigationService {

  private _leftnav: MdSidenav;
  private _rightnav: MdSidenav;

  public leftnav = new ReplaySubject<MdSidenav>(1);
  public rightnav = new ReplaySubject<MdSidenav>(1);

  constructor() {

  }

  getLeftNav(): MdSidenav {
    return this._leftnav;
  }

  getRightNav(): MdSidenav {
    return this._rightnav;
  }

  setLeftNav(nav: MdSidenav): void {
    this._leftnav = nav;
  }

  setRightNav(nav: MdSidenav): void {
    this._rightnav = nav;
  }


}
